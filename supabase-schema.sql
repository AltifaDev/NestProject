-- Create user profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  email TEXT,
  role TEXT CHECK (role IN ('investor', 'admin', 'fund_manager')) DEFAULT 'investor',
  kyc_status TEXT CHECK (kyc_status IN ('pending', 'verified', 'rejected')) DEFAULT 'pending',
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow users to view their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create Funds table
CREATE TABLE IF NOT EXISTS public.funds (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  vintage_year INTEGER,
  target_irr NUMERIC, -- Internal Rate of Return targets
  status TEXT CHECK (status IN ('raising', 'active', 'liquidated')) DEFAULT 'raising',
  total_commitment NUMERIC DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on Funds
ALTER TABLE public.funds ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to view funds (Investors need to see available funds)
CREATE POLICY "authenticated_view_funds" ON public.funds
  FOR SELECT TO authenticated USING (true);

-- Create Portfolio Holdings table (Connects Investors to Funds)
CREATE TABLE IF NOT EXISTS public.portfolio_holdings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  investor_id UUID REFERENCES public.profiles(id) NOT NULL,
  fund_id UUID REFERENCES public.funds(id) NOT NULL,
  committed_amount NUMERIC DEFAULT 0,
  contributed_amount NUMERIC DEFAULT 0,
  current_value NUMERIC DEFAULT 0,
  distributions NUMERIC DEFAULT 0, -- DPI calculation base
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on Portfolio Holdings
ALTER TABLE public.portfolio_holdings ENABLE ROW LEVEL SECURITY;

-- Investors can only see their own holdings
CREATE POLICY "investors_view_own_holdings" ON public.portfolio_holdings
  FOR SELECT TO authenticated USING (auth.uid() = investor_id);

-- Create Transactions table (Capital Calls, Distributions)
CREATE TABLE IF NOT EXISTS public.transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  holding_id UUID REFERENCES public.portfolio_holdings(id) NOT NULL,
  type TEXT CHECK (type IN ('capital_call', 'distribution', 'fee')),
  amount NUMERIC NOT NULL,
  transaction_date DATE DEFAULT CURRENT_DATE,
  description TEXT,
  status TEXT CHECK (status IN ('pending', 'completed', 'failed')) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on Transactions
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Investors can view transactions related to their holdings
CREATE POLICY "investors_view_own_transactions" ON public.transactions
  FOR SELECT TO authenticated USING (
    EXISTS (
      SELECT 1 FROM public.portfolio_holdings
      WHERE public.portfolio_holdings.id = transactions.holding_id
      AND public.portfolio_holdings.investor_id = auth.uid()
    )
  );

-- Create Documents table
CREATE TABLE IF NOT EXISTS public.documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  file_path TEXT NOT NULL, -- Path in Supabase Storage
  type TEXT CHECK (type IN ('report', 'tax', 'legal')),
  fund_id UUID REFERENCES public.funds(id),
  investor_id UUID REFERENCES public.profiles(id), -- If specific to an investor (e.g., K-1)
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on Documents
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- Investors can view general fund docs provided they are invested in the fund
CREATE POLICY "view_fund_docs" ON public.documents
  FOR SELECT TO authenticated USING (
    fund_id IS NOT NULL AND investor_id IS NULL AND EXISTS (
      SELECT 1 FROM public.portfolio_holdings
      WHERE public.portfolio_holdings.fund_id = documents.fund_id
      AND public.portfolio_holdings.investor_id = auth.uid()
    )
  );

-- Investors can view their own specific docs
CREATE POLICY "view_own_docs" ON public.documents
  FOR SELECT TO authenticated USING (investor_id = auth.uid());

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, role)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name', 'investor');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create profile on signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Seed Initial Data (Example Fund)
INSERT INTO public.funds (name, description, vintage_year, target_irr, status)
VALUES 
  ('Nest Growth Fund I', 'Early-stage technology investments in SE Asia', 2023, 25.0, 'active'),
  ('Nest Real Estate Opps II', 'Distressed commercial real estate in Bangkok', 2024, 18.0, 'raising');
