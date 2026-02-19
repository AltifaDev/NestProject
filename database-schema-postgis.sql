-- ========================================
-- Property Search with PostGIS Schema
-- ========================================

-- Enable PostGIS extension
CREATE EXTENSION IF NOT EXISTS postgis;

-- Drop existing tables if any
DROP TABLE IF EXISTS properties CASCADE;

-- Properties table with geospatial support
CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  address TEXT NOT NULL,
  
  -- Geospatial data (CRITICAL: GEOGRAPHY type for accurate distance calculations)
  location GEOGRAPHY(Point, 4326) NOT NULL,
  
  -- Property details
  property_type TEXT CHECK (property_type IN ('condo', 'house', 'land', 'commercial', 'villa')) NOT NULL,
  listing_type TEXT CHECK (listing_type IN ('sale', 'rent')) NOT NULL,
  price NUMERIC NOT NULL,
  bedrooms INTEGER DEFAULT 0,
  bathrooms INTEGER DEFAULT 0,
  living_area NUMERIC, -- sqm
  land_area NUMERIC, -- sqm (for houses/land)
  
  -- Amenities (JSONB for flexibility)
  amenities JSONB DEFAULT '[]'::jsonb,
  view_type TEXT[] DEFAULT ARRAY[]::TEXT[], -- ['sea', 'city', 'garden', 'mountain']
  
  -- Images
  images TEXT[] DEFAULT ARRAY[]::TEXT[],
  thumbnail TEXT,
  
  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'sold', 'rented', 'pending')),
  featured BOOLEAN DEFAULT false,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ========================================
-- INDEXES (CRITICAL for Performance)
-- ========================================

-- Spatial index using GIST (Geographic Index Search Tree)
CREATE INDEX idx_properties_location ON properties USING GIST(location);

-- Full-text search index
CREATE INDEX idx_properties_search ON properties USING GIN(
  to_tsvector('english', COALESCE(title, '') || ' ' || COALESCE(description, '') || ' ' || COALESCE(address, ''))
);

-- Price index for range queries
CREATE INDEX idx_properties_price ON properties(price);

-- Property type index
CREATE INDEX idx_properties_type ON properties(property_type, listing_type);

-- Status index
CREATE INDEX idx_properties_status ON properties(status) WHERE status = 'active';

-- Composite index for common queries
CREATE INDEX idx_properties_composite ON properties(property_type, listing_type, status, price);

-- ========================================
-- MOCK DATA (Thailand Properties)
-- ========================================

INSERT INTO properties (
  title, description, address, location, 
  property_type, listing_type, price, bedrooms, bathrooms, living_area, land_area,
  thumbnail, amenities, view_type, featured
) VALUES 
  -- Bangkok - Sukhumvit Area
  (
    'Luxury Condo Sukhumvit 24',
    'Modern 2-bedroom condo in prime Sukhumvit location with stunning city views. Walking distance to BTS Phrom Phong.',
    '123 Sukhumvit 24, Khlong Toei, Bangkok 10110',
    ST_SetSRID(ST_MakePoint(100.5614, 13.7367), 4326),
    'condo', 'sale', 8500000, 2, 2, 85, NULL,
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    '["pool", "gym", "parking", "security_24h", "sky_lounge"]'::jsonb,
    ARRAY['city'],
    true
  ),
  (
    'Penthouse Sathorn',
    'Exclusive 3-bedroom penthouse with 180-degree city views. Premium finishes and private elevator access.',
    '789 Sathorn Road, Silom, Bangkok 10500',
    ST_SetSRID(ST_MakePoint(100.5352, 13.7244), 4326),
    'condo', 'sale', 25000000, 3, 3, 180, NULL,
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    '["pool", "gym", "concierge", "wine_cellar", "private_lift"]'::jsonb,
    ARRAY['city', 'river'],
    true
  ),
  (
    'Modern Condo Thonglor',
    'Stylish 1-bedroom unit in trendy Thonglor. Perfect for young professionals.',
    '456 Thonglor Soi 10, Watthana, Bangkok 10110',
    ST_SetSRID(ST_MakePoint(100.5834, 13.7367), 4326),
    'condo', 'rent', 35000, 1, 1, 45, NULL,
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    '["pool", "gym", "parking", "co_working"]'::jsonb,
    ARRAY['city'],
    false
  ),
  
  -- Phuket - Beach Properties
  (
    'Beachfront Villa Patong',
    'Stunning 4-bedroom villa with direct beach access. Infinity pool overlooking Andaman Sea.',
    '456 Beach Road, Patong, Phuket 83150',
    ST_SetSRID(ST_MakePoint(98.2967, 7.8965), 4326),
    'villa', 'sale', 35000000, 4, 4, 350, 600,
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
    '["pool", "beach_access", "garden", "maid_room", "bbq_area"]'::jsonb,
    ARRAY['sea', 'garden'],
    true
  ),
  (
    'Sea View Condo Kamala',
    'Modern 2-bedroom condo with panoramic ocean views. Resort-style living.',
    '321 Kamala Beach, Kathu, Phuket 83150',
    ST_SetSRID(ST_MakePoint(98.2814, 7.9658), 4326),
    'condo', 'sale', 12000000, 2, 2, 95, NULL,
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    '["pool", "gym", "beach_shuttle", "restaurant"]'::jsonb,
    ARRAY['sea'],
    false
  ),
  
  -- Chiang Mai - Mountain Properties
  (
    'Mountain View Villa Doi Suthep',
    'Peaceful 3-bedroom villa with mountain views. Traditional Lanna architecture.',
    '654 Suthep Road, Chiang Mai 50200',
    ST_SetSRID(ST_MakePoint(98.9167, 18.8042), 4326),
    'villa', 'sale', 15000000, 3, 3, 280, 800,
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    '["garden", "parking", "mountain_view", "terrace"]'::jsonb,
    ARRAY['mountain', 'garden'],
    false
  ),
  (
    'Modern Townhouse Nimman',
    'Contemporary 3-bedroom townhouse in trendy Nimman area. Walking distance to cafes and shops.',
    '789 Nimmanhaemin Road, Chiang Mai 50200',
    ST_SetSRID(ST_MakePoint(98.9653, 18.7967), 4326),
    'house', 'sale', 8500000, 3, 2, 150, 100,
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    '["parking", "garden", "security"]'::jsonb,
    ARRAY['city'],
    false
  ),
  
  -- Pattaya - Beach Properties
  (
    'Beachfront Condo Jomtien',
    'Spacious 2-bedroom condo with direct beach access. Fully furnished.',
    '321 Jomtien Beach Road, Pattaya 20150',
    ST_SetSRID(ST_MakePoint(100.8824, 12.8936), 4326),
    'condo', 'rent', 45000, 2, 2, 80, NULL,
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    '["pool", "beach_access", "gym", "parking"]'::jsonb,
    ARRAY['sea'],
    false
  ),
  (
    'Luxury Pool Villa Pattaya',
    'Private 5-bedroom pool villa. Perfect for families or investment.',
    '123 Pratumnak Hill, Pattaya 20150',
    ST_SetSRID(ST_MakePoint(100.8724, 12.9136), 4326),
    'villa', 'sale', 28000000, 5, 5, 400, 500,
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    '["pool", "garden", "parking", "sea_view", "maid_room"]'::jsonb,
    ARRAY['sea', 'city'],
    true
  ),
  
  -- Hua Hin - Resort Properties
  (
    'Beachfront Condo Hua Hin',
    'Cozy 1-bedroom condo steps from the beach. Great for weekend getaways.',
    '456 Beach Road, Hua Hin 77110',
    ST_SetSRID(ST_MakePoint(99.9576, 12.5683), 4326),
    'condo', 'sale', 4500000, 1, 1, 42, NULL,
    'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800',
    '["pool", "beach_access", "parking"]'::jsonb,
    ARRAY['sea'],
    false
  ),
  
  -- Bangkok - Riverside
  (
    'River View Condo Charoenkrung',
    'Elegant 2-bedroom condo with Chao Phraya River views. Historic neighborhood.',
    '234 Charoenkrung Road, Bang Rak, Bangkok 10500',
    ST_SetSRID(ST_MakePoint(100.5152, 13.7244), 4326),
    'condo', 'rent', 55000, 2, 2, 90, NULL,
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    '["pool", "gym", "river_view", "shuttle_boat"]'::jsonb,
    ARRAY['river', 'city'],
    false
  ),
  
  -- Commercial Properties
  (
    'Retail Space Siam Square',
    'Prime retail space in the heart of Bangkok shopping district.',
    '567 Rama 1 Road, Pathumwan, Bangkok 10330',
    ST_SetSRID(ST_MakePoint(100.5334, 13.7453), 4326),
    'commercial', 'rent', 250000, 0, 2, 120, NULL,
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    '["parking", "security_24h", "high_traffic"]'::jsonb,
    ARRAY['city'],
    false
  ),
  
  -- Land
  (
    'Development Land Phuket',
    'Prime land plot near Patong Beach. Perfect for resort development.',
    'Patong Hill, Kathu, Phuket 83150',
    ST_SetSRID(ST_MakePoint(98.2867, 7.9065), 4326),
    'land', 'sale', 45000000, 0, 0, NULL, 2400,
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    '["sea_view", "road_access", "electricity"]'::jsonb,
    ARRAY['sea', 'mountain'],
    true
  );

-- ========================================
-- HELPER FUNCTIONS
-- ========================================

-- Function to search properties within radius
CREATE OR REPLACE FUNCTION search_properties_nearby(
  search_lat FLOAT,
  search_lng FLOAT,
  radius_km FLOAT DEFAULT 5,
  max_results INT DEFAULT 50
)
RETURNS TABLE (
  id UUID,
  title TEXT,
  address TEXT,
  price NUMERIC,
  bedrooms INT,
  bathrooms INT,
  property_type TEXT,
  listing_type TEXT,
  thumbnail TEXT,
  lng FLOAT,
  lat FLOAT,
  distance_km FLOAT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.title,
    p.address,
    p.price,
    p.bedrooms,
    p.bathrooms,
    p.property_type,
    p.listing_type,
    p.thumbnail,
    ST_X(p.location::geometry) as lng,
    ST_Y(p.location::geometry) as lat,
    ST_Distance(
      p.location::geography,
      ST_MakePoint(search_lng, search_lat)::geography
    ) / 1000 as distance_km
  FROM properties p
  WHERE 
    p.status = 'active'
    AND ST_DWithin(
      p.location::geography,
      ST_MakePoint(search_lng, search_lat)::geography,
      radius_km * 1000
    )
  ORDER BY distance_km
  LIMIT max_results;
END;
$$ LANGUAGE plpgsql;

-- Function to get properties within bounding box
CREATE OR REPLACE FUNCTION search_properties_bbox(
  min_lng FLOAT,
  min_lat FLOAT,
  max_lng FLOAT,
  max_lat FLOAT
)
RETURNS TABLE (
  id UUID,
  title TEXT,
  address TEXT,
  price NUMERIC,
  bedrooms INT,
  property_type TEXT,
  listing_type TEXT,
  thumbnail TEXT,
  lng FLOAT,
  lat FLOAT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.title,
    p.address,
    p.price,
    p.bedrooms,
    p.property_type,
    p.listing_type,
    p.thumbnail,
    ST_X(p.location::geometry) as lng,
    ST_Y(p.location::geometry) as lat
  FROM properties p
  WHERE 
    p.status = 'active'
    AND ST_Within(
      p.location::geometry,
      ST_MakeEnvelope(min_lng, min_lat, max_lng, max_lat, 4326)
    )
  ORDER BY p.created_at DESC;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- SAMPLE QUERIES
-- ========================================

-- Find properties near Bangkok center (5km radius)
-- SELECT * FROM search_properties_nearby(13.7563, 100.5018, 5);

-- Find properties in bounding box (Bangkok area)
-- SELECT * FROM search_properties_bbox(100.4, 13.6, 100.7, 13.9);

-- Full-text search
-- SELECT * FROM properties 
-- WHERE to_tsvector('english', title || ' ' || description || ' ' || address) 
-- @@ to_tsquery('english', 'beach & condo');
