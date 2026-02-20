// API Client for Property Search
// Connects to Supabase backend (Postgres) directly
// Schema based on Payload CMS generated tables

import { createClient } from '@supabase/supabase-js';

const API_BASE_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:8000';
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const PAYLOAD_URL = import.meta.env.PUBLIC_PAYLOAD_URL || 'http://localhost:3000';

export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Formats a media URL by prepending the Payload base URL if needed.
 */
const formatMediaUrl = (url: string | null | undefined): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  // Ensure it starts with /
  const path = url.startsWith('/') ? url : `/${url}`;
  return `${PAYLOAD_URL}${path}`;
};

export interface SearchFilters {
  location?: string;
  priceMin?: number;
  priceMax?: number;
  bedrooms?: string;
  bathrooms?: string;
  propertyType?: string;
  listingType?: 'sale' | 'rent';
  livingAreaMin?: number;
  livingAreaMax?: number;
  pet_friendly?: boolean;
}

// Re-export specific interfaces for Frontend usage
export interface NearbyPlace {
  id?: string;
  name: string;
  distance: string;
  category: 'transport' | 'shop' | 'edu' | 'hosp';
  icon?: string;
}

export interface IndoorAmenities {
  furniture?: boolean;
  air_con?: boolean;
  water_heater?: boolean;
  digital_lock?: boolean;
  bathtub?: boolean;
  stove?: boolean;
  tv?: boolean;
  refrigerator?: boolean;
  internet?: boolean;
  smart_home?: boolean;
}

export interface ProjectAmenities {
  lift?: boolean;
  parking_facility?: boolean;
  pool?: boolean;
  gym?: boolean;
  cctv?: boolean;
  security?: boolean;
  garden?: boolean;
  storage?: boolean;
}

export interface Property {
  id: string;
  title: string;
  description?: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  livingArea?: number;
  landArea?: number;
  sqft?: number; // legacy alias
  yearBuilt?: number;
  propertyType: string;
  listingType: 'sale' | 'rent' | string;
  thumbnail: string;
  images?: string[];

  // Location
  lng: number;
  lat: number;
  distanceKm?: number;
  location?: {
    lat?: number;
    lng?: number;
    province?: string;
    district?: string;
    sub_district?: string;
    postcode?: string;
  };

  rating?: number;
  isSuperhost?: boolean;

  agent?: {
    id?: string;
    name: string;
    role: string;
    image_url: string;
    phone?: string;
    email?: string;
    lineId?: string;
    verified?: boolean;
  };

  // Specs
  floors?: number;
  parking?: number;
  project_name?: string;
  direction?: string;
  ownership?: string;
  common_fee?: number;
  decoration?: string;
  view_count?: number;
  updatedAt?: string;
  createdAt?: string;

  featured?: boolean;
  pet_friendly?: boolean;
  video_url?: string;

  // Structured amenities
  indoor_amenities?: IndoorAmenities;
  project_amenities?: ProjectAmenities;

  // Legacy / Fallback
  amenities?: string[];

  // Nearby places
  nearby_places?: NearbyPlace[];
}

export interface GeoJSONFeature {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: [number, number]; // [lng, lat]
  };
  properties: Property;
}

export interface GeoJSONFeatureCollection {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
}

export interface GeocodeResult {
  name: string;
  lat: number;
  lng: number;
  bbox?: [number, number, number, number];
}

class APIClient {
  private baseURL: string;

  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Geocode address to coordinates
  async geocode(address: string): Promise<GeocodeResult[]> {
    return this.request<GeocodeResult[]>(`/api/geocode?address=${encodeURIComponent(address)}`);
  }

  // Search properties with filters
  async searchProperties(filters: SearchFilters): Promise<GeoJSONFeatureCollection> {
    // 1. SELECT properties
    // Note: We perform joins using Supabase syntax.
    // 'agents' is a relation column. We fetch the related agent data.
    // 'properties_images' is the join table for the 'images' array field.
    // 'properties_nearby_places' is the join table for the 'nearby_places' array field.

    // We try to fetch everything needed. 
    // JSON columns (location, stats, details, indoor_amenities, project_amenities) are returned automatically with *.

    let query = supabase.from('properties')
      .select(`
        *,
        agent:agents (
          id,
          name,
          role,
          phone,
          email,
          lineId:line_id,
          verified,
          bio,
          photo:media (
            url
          )
        ),
        images:properties_images (
          image:media (
            url
          ),
          tag,
          caption
        ),
        thumbnail:media (
          url
        ),
        nearby_places:properties_nearby_places (
          *
        )
      `)
      .eq('status', 'active');

    // 2. Apply Filters
    if (filters.listingType) {
      query = query.eq('listing_type', filters.listingType);
    }

    if (filters.propertyType) {
      const types = filters.propertyType.split(',').map(t => t.trim());
      if (types.length > 1) {
        query = query.in('property_type', types);
      } else {
        query = query.eq('property_type', types[0]);
      }
    }

    if (filters.priceMin) {
      query = query.gte('price', filters.priceMin);
    }

    if (filters.priceMax) {
      query = query.lte('price', filters.priceMax);
    }

    if (filters.pet_friendly) {
      // details->pet_friendly or top-level depending on where it ended up
      // Based on my edit to Properties.ts, I put pet_friendly in details[] array?? No, I put it as a field inside 'details' group field?
      // Let's re-verify: I added it under 'details' group fields array. Correct.
      query = query.eq('details->pet_friendly', true);
    }

    // Filter by stats (JSONB or Flattened)
    // Payload usually stores 'stats' as a JSONB column if defined as group
    // Syntax for JSONB in Supabase: stats->>key or stats->key
    if (filters.bedrooms && filters.bedrooms !== 'any') {
      if (filters.bedrooms === '4+') {
        query = query.gte('stats->bedrooms', 4);
      } else {
        query = query.eq('stats->bedrooms', parseInt(filters.bedrooms));
      }
    }

    if (filters.bathrooms && filters.bathrooms !== 'any') {
      if (filters.bathrooms === '4+') {
        query = query.gte('stats->bathrooms', 4);
      } else {
        query = query.eq('stats->bathrooms', parseInt(filters.bathrooms));
      }
    }

    if (filters.location) {
      query = query.or(`title.ilike.%${filters.location}%,address.ilike.%${filters.location}%,project_name.ilike.%${filters.location}%`);
    }

    if (filters.livingAreaMin) {
      query = query.gte('stats->livingArea', filters.livingAreaMin);
    }

    if (filters.livingAreaMax) {
      query = query.lte('stats->livingArea', filters.livingAreaMax);
    }

    // Execute Query
    const { data: properties, error } = await query;

    if (error) {
      console.error('Supabase search error:', error);
      // Fallback or empty return
      return { type: 'FeatureCollection', features: [] };
    }

    // 3. Transform to GeoJSON
    const features: GeoJSONFeatureCollection['features'] = (properties || []).map((prop: any) => {
      // ─── Extract Data ───

      // Thumbnail
      // 'media' table usually has 'url'
      const thumbnailInfo = prop.thumbnail;
      const thumbnailUrl = thumbnailInfo?.url || '';

      // Gallery Images
      // prop.images is an array of join objects from 'properties_images'
      // Each item has 'image' relation to 'media'
      const galleryUrls = (prop.images || [])
        .map((item: any) => item.image?.url)
        .filter(Boolean);

      // Coordinates (from location columns)
      const lat = prop.lat ?? prop.location?.lat ?? 13.7563;
      const lng = prop.lng ?? prop.location?.lng ?? 100.5018;

      // Stats group
      const stats = prop.stats || {};
      const details = prop.details || {};

      // Agent
      const agent = prop.agent;
      const agentData = agent ? {
        id: agent.id?.toString(),
        name: agent.name,
        role: agent.role || 'Agent',
        image_url: formatMediaUrl(agent.photo?.url),
        phone: agent.phone,
        email: agent.email,
        lineId: agent.lineId,
        verified: agent.verified
      } : undefined;

      const agentPhotoUrl = agentData?.image_url || '';

      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lng, lat]
        },
        properties: {
          id: prop.id?.toString(),
          title: prop.title,
          description: prop.description || '',

          // Address
          address: prop.address || prop.location?.province || '',

          // Pricing
          price: prop.price || 0,

          // Stats
          bedrooms: stats.bedrooms || 0,
          bathrooms: stats.bathrooms || 0,
          livingArea: stats.livingArea || 0,
          landArea: stats.landArea || 0,
          sqft: stats.livingArea || 0, // Fallback alias
          yearBuilt: stats.yearBuilt,
          floors: stats.floors,
          parking: stats.parking,

          propertyType: prop.property_type || 'Unknown',
          listingType: prop.listing_type || 'sale',
          thumbnail: formatMediaUrl(thumbnailUrl),
          images: galleryUrls.length > 0 ? galleryUrls.map((u: string) => formatMediaUrl(u)) : [formatMediaUrl(thumbnailUrl)],

          // Location (top level for map)
          lng: lng,
          lat: lat,
          // Pass full location object for detail view
          location: prop.location,

          // Details
          project_name: prop.project_name,
          direction: details.direction,
          ownership: details.ownership,
          common_fee: details.common_fee,
          decoration: details.decoration,
          pet_friendly: details.pet_friendly || false,

          // Metadata
          view_count: prop.view_count || 0,
          updatedAt: prop.updated_at,
          createdAt: prop.created_at,
          featured: prop.featured,
          rating: 0, // Placeholder as no rating field in DB yet

          // Amenities
          indoor_amenities: prop.indoor_amenities || {},
          project_amenities: prop.project_amenities || {},
          amenities: [], // Legacy compat

          // Nearby Places (from separate table join)
          nearby_places: (prop.nearby_places || []).map((np: any) => ({
            id: np.id,
            name: np.name,
            distance: np.distance,
            category: np.category,
            icon: np.icon
          })),

          agent: agentData
        }
      };
    });

    return {
      type: 'FeatureCollection',
      features: features
    };
  }

  // Get nearby properties (radius search)
  // This likely needs a Postgres function "nearby_properties" or similar spatial query
  async getNearbyProperties(
    lat: number,
    lng: number,
    radius: number = 5
  ): Promise<Property[]> {
    // Return empty for now as it requires specific RPC or PostGIS setup
    return [];
  }

  // Get property details by ID (using same logic as search to ensure consistency)
  async getProperty(id: string): Promise<Property | null> {
    const { data: prop, error } = await supabase.from('properties')
      .select(`
        *,
        agent:agents (
          id,
          name,
          role,
          phone,
          email,
          lineId:line_id,
          verified,
          bio,
          photo:media (
            url
          )
        ),
        images:properties_images (
          image:media (
            url
          ),
          tag,
          caption
        ),
        thumbnail:media (
          url
        ),
        nearby_places:properties_nearby_places (
          *
        )
      `)
      .eq('id', id)
      .single();

    if (error || !prop) {
      console.error('Error fetching property:', error);
      return null;
    }

    // Reuse transformation logic implicitly (or duplicate for safety)
    const thumbnailInfo = prop.thumbnail as any;
    const thumbnailUrl = thumbnailInfo?.url || '';

    const galleryUrls = (prop.images as any[] || [])
      .map((item: any) => item.image?.url)
      .filter(Boolean);

    const lat = prop.location?.lat ?? (prop as any).location_lat ?? 13.7563;
    const lng = prop.location?.lng ?? (prop as any).location_lng ?? 100.5018;
    const stats = prop.stats || {};
    const details = prop.details || {};
    // Agent
    const agent = prop.agent;
    const agentData = agent ? {
      id: agent.id?.toString(),
      name: agent.name,
      role: agent.role || 'Agent',
      image_url: formatMediaUrl(agent.photo?.url),
      phone: agent.phone,
      email: agent.email,
      lineId: agent.lineId,
      verified: agent.verified
    } : undefined;
    const agentPhotoUrl = agentData?.image_url || '';

    return {
      id: prop.id?.toString(),
      title: prop.title,
      description: prop.description || '',
      address: prop.address || '',
      price: prop.price || 0,

      bedrooms: stats.bedrooms || 0,
      bathrooms: stats.bathrooms || 0,
      livingArea: stats.livingArea || 0,
      sqft: stats.livingArea || 0,
      landArea: stats.landArea || 0,
      yearBuilt: stats.yearBuilt,
      floors: stats.floors,
      parking: stats.parking,

      propertyType: prop.property_type || 'Unknown',
      listingType: prop.listing_type || 'sale',
      thumbnail: formatMediaUrl(thumbnailUrl),
      images: galleryUrls.length > 0 ? galleryUrls.map((u: string) => formatMediaUrl(u)) : [formatMediaUrl(thumbnailUrl)],

      lng: lng,
      lat: lat,
      location: prop.location,

      project_name: prop.project_name,
      direction: details.direction,
      ownership: details.ownership,
      common_fee: details.common_fee,
      decoration: details.decoration,

      view_count: prop.view_count || 0,
      updatedAt: prop.updated_at,
      createdAt: prop.created_at,
      featured: prop.featured,

      indoor_amenities: prop.indoor_amenities || {},
      project_amenities: prop.project_amenities || {},
      amenities: [],

      nearby_places: (prop.nearby_places as any[] || []).map((np: any) => ({
        id: np.id,
        name: np.name,
        distance: np.distance,
        category: np.category,
        icon: np.icon
      })),

      agent: agentData
    };
  }

  // Get featured properties
  async getFeaturedProperties(): Promise<Property[]> {
    const { data, error } = await supabase.from('properties')
      .select(`
        *,
        thumbnail:media ( url ),
        location
      `)
      .eq('featured', true)
      .eq('status', 'active')
      .limit(6);

    if (error) return [];

    return data.map((prop: any) => ({
      id: prop.id.toString(),
      title: prop.title,
      price: prop.price,
      address: prop.address,
      thumbnail: formatMediaUrl((prop.thumbnail as any)?.url),
      bedrooms: prop.stats?.bedrooms || 0,
      bathrooms: prop.stats?.bathrooms || 0,
      livingArea: prop.stats?.livingArea || 0,
      propertyType: prop.property_type || 'Unknown',
      listingType: prop.listing_type || 'sale',
      lat: prop.location?.lat || 13.7563,
      lng: prop.location?.lng || 100.5018,
      // Minimal fields for featured card
    } as Property));
  }
}

export const apiClient = new APIClient();
export default APIClient;
