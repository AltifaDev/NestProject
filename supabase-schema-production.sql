-- ========================================
-- PRODUCTION DATABASE SCHEMA
-- Application: Nest of Assets (Property Search & Investment)
-- ========================================

-- 1. EXTENSIONS
-- Enable PostGIS for geospatial queries
CREATE EXTENSION IF NOT EXISTS postgis;

-- 2. ENUMS (for consistent status/types)
DO $$ BEGIN
    CREATE TYPE property_status AS ENUM ('active', 'sold', 'rented', 'pending', 'draft');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE listing_type AS ENUM ('sale', 'rent');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE property_category AS ENUM ('condo', 'house', 'land', 'commercial', 'villa', 'penthouse');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 3. MAIN PROPERTIES TABLE
CREATE TABLE IF NOT EXISTS public.properties (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    owner_id UUID REFERENCES public.profiles(id), -- Linked to user system (Agents/Admins)
    
    -- Basic Info
    title TEXT NOT NULL,
    description TEXT,
    slug TEXT UNIQUE, -- SEO friendly URL
    
    -- Location (PostGIS)
    location GEOGRAPHY(Point, 4326) NOT NULL,
    address_display TEXT NOT NULL, -- Full address for display
    address_components JSONB DEFAULT '{}'::jsonb, -- { "province": "Bangkok", "district": "Wattana" }
    
    -- Specs
    category property_category NOT NULL,
    listing_type listing_type NOT NULL,
    price NUMERIC NOT NULL,
    currency TEXT DEFAULT 'THB',
    
    bedrooms INTEGER DEFAULT 0,
    bathrooms INTEGER DEFAULT 0,
    floor_size NUMERIC, -- sqm
    land_size NUMERIC, -- sq wah (for land/house)
    
    -- Features & Amenities
    -- Stored as JSONB for flexibility: ["pool", "gym", "wifi"]
    amenities JSONB DEFAULT '[]'::jsonb,
    
    -- Views: ["city", "river", "garden"]
    views TEXT[] DEFAULT ARRAY[]::TEXT[],
    
    -- Status
    status property_status DEFAULT 'draft',
    is_featured BOOLEAN DEFAULT false,
    
    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. PROPERTY IMAGES TABLE
-- Dedicated table for managing multiple images per property
CREATE TABLE IF NOT EXISTS public.property_images (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE,
    
    url TEXT NOT NULL, -- Public URL
    storage_path TEXT, -- Internal path in Supabase Storage
    
    caption TEXT,
    is_thumbnail BOOLEAN DEFAULT false,
    display_order INTEGER DEFAULT 0,
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. PROPERTY INQUIRIES / LEADS
-- Captures interest from "Get Consultation" or "Contact Agent"
CREATE TABLE IF NOT EXISTS public.property_inquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    property_id UUID REFERENCES public.properties(id),
    user_id UUID REFERENCES public.profiles(id), -- If logged in
    
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    message TEXT,
    
    status TEXT DEFAULT 'new', -- new, contacted, closed
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. INDEXES FOR PERFORMANCE
-- Spatial Index for "Search Nearby"
CREATE INDEX IF NOT EXISTS idx_properties_location ON public.properties USING GIST(location);

-- Filter Indexes
CREATE INDEX IF NOT EXISTS idx_properties_price ON public.properties(price);
CREATE INDEX IF NOT EXISTS idx_properties_category ON public.properties(category);
CREATE INDEX IF NOT EXISTS idx_properties_status ON public.properties(status);
CREATE INDEX IF NOT EXISTS idx_properties_composite_search ON public.properties(status, listing_type, category, price);

-- Full Text Search Index
CREATE INDEX IF NOT EXISTS idx_properties_fts ON public.properties USING GIN(
    to_tsvector('english', title || ' ' || COALESCE(description, '') || ' ' || address_display)
);

-- 7. GEOSPATIAL FUNCTIONS
-- Search Radius Function
CREATE OR REPLACE FUNCTION search_properties_nearby(
  lat FLOAT,
  lng FLOAT,
  radius_km FLOAT DEFAULT 10,
  limit_count INT DEFAULT 50
)
RETURNS TABLE (
  id UUID,
  title TEXT,
  price NUMERIC,
  bedrooms INT,
  bathrooms INT,
  floor_size NUMERIC,
  thumbnail TEXT,
  lat FLOAT,
  lng FLOAT,
  distance_km FLOAT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.title,
    p.price,
    p.bedrooms,
    p.bathrooms,
    p.floor_size,
    (SELECT url FROM property_images WHERE property_id = p.id AND is_thumbnail = true LIMIT 1) as thumbnail,
    ST_Y(p.location::geometry) as lat,
    ST_X(p.location::geometry) as lng,
    ST_Distance(p.location, ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography) / 1000 as distance_km
  FROM properties p
  WHERE 
    p.status = 'active'
    AND ST_DWithin(p.location, ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography, radius_km * 1000)
  ORDER BY distance_km ASC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql;

-- 8. ROW LEVEL SECURITY (RLS)
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_inquiries ENABLE ROW LEVEL SECURITY;

-- Policies
-- Everyone can view active properties
CREATE POLICY "Public can view active properties" ON public.properties
    FOR SELECT USING (status = 'active');

-- Admins/Agents can view all properties (assuming simple role check for now)
-- You might need a more complex role check function depending on your auth setup
CREATE POLICY "Admins can view all properties" ON public.properties
    FOR ALL USING (
        auth.uid() IN (SELECT id FROM public.profiles WHERE role IN ('admin', 'fund_manager'))
    );

-- 9. TRIGGERS
-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_properties_modtime
    BEFORE UPDATE ON public.properties
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
