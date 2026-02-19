// API Client for Property Search
// Connects to Supabase backend

import { createClient } from '@supabase/supabase-js';

const API_BASE_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:8000';
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface SearchFilters {
  location?: string;
  priceMin?: number;
  priceMax?: number;
  bedrooms?: string;
  bathrooms?: string;
  propertyType?: string;
  listingType?: 'sale' | 'rent';
  viewType?: string[];
  livingAreaMin?: number;
  livingAreaMax?: number;
}

export interface NearbyPlace {
  name: string;
  distance: string;
  category: 'transport' | 'shop' | 'edu' | 'hosp';
  icon?: string;
  id?: string;
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
  sqft?: number;
  yearBuilt?: number;
  propertyType: string;
  listingType: 'sale' | 'rent' | string;
  thumbnail: string;
  images?: string[];
  amenities?: string[];
  viewType?: string[];
  lng: number;
  lat: number;
  distanceKm?: number;
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
  // ─── New complete fields ───
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
  // ─── Structured amenities ───
  indoor_amenities?: IndoorAmenities;
  project_amenities?: ProjectAmenities;
  // ─── Nearby places ───
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
  bbox?: [number, number, number, number]; // [minLng, minLat, maxLng, maxLat]
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
    // Connect to Supabase
    let query = supabase.from('properties')
      .select(`
        *,
        lat,
        lng,
        agents (
          name,
          role,
          image_url,
          phone,
          email
        ),
        property_images!inner(url, is_thumbnail)
      `)
      .eq('status', 'active'); // Only show active properties

    // Apply filters
    if (filters.listingType) {
      query = query.eq('listing_type', filters.listingType.toLowerCase());
    }

    if (filters.propertyType) {
      const types = filters.propertyType.split(',').map(t => t.trim().toLowerCase());
      if (types.length > 1) {
        query = query.in('category', types);
      } else {
        query = query.eq('category', types[0]);
      }
    }

    if (filters.priceMin) {
      query = query.gte('price', filters.priceMin);
    }

    if (filters.priceMax) {
      query = query.lte('price', filters.priceMax);
    }

    if (filters.bedrooms && filters.bedrooms !== 'any') {
      if (filters.bedrooms === '4+') {
        query = query.gte('bedrooms', 4);
      } else {
        query = query.eq('bedrooms', parseInt(filters.bedrooms));
      }
    }

    if (filters.bathrooms && filters.bathrooms !== 'any') {
      if (filters.bathrooms === '4+') {
        query = query.gte('bathrooms', 4);
      } else {
        query = query.eq('bathrooms', parseInt(filters.bathrooms));
      }
    }

    const { data: properties, error } = await query;

    if (error) {
      console.error('Supabase search error:', error);
      return { type: 'FeatureCollection', features: [] };
    }

    // Transform Supabase result to GeoJSON
    const features: GeoJSONFeature[] = (properties || []).map((prop: any) => {
      // Extract thumbnail
      const thumbnailData = prop.property_images && prop.property_images.find ?
        (prop.property_images.find((img: any) => img.is_thumbnail) || prop.property_images[0]) : null;
      const thumbnail = thumbnailData ? thumbnailData.url : '';

      // Use fetched coordinates or default to Bangkok center if missing
      const lat = prop.lat || 13.7563;
      const lng = prop.lng || 100.5018;

      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lng, lat]
        },
        properties: {
          id: prop.id,
          title: prop.title,
          description: prop.description || '',
          address: prop.address_display || prop.address || '',
          price: prop.price || 0,
          bedrooms: prop.bedrooms || 0,
          bathrooms: prop.bathrooms || 0,
          livingArea: prop.floor_size,
          sqft: prop.floor_size || 0,
          yearBuilt: prop.year_built || undefined,
          propertyType: prop.category || 'Unknown',
          listingType: prop.listing_type || 'sale',
          thumbnail: thumbnail || '',
          lng: lng,
          lat: lat,
          rating: prop.rating,
          isSuperhost: prop.is_superhost,
          agent: prop.agents ? {
            name: prop.agents.name,
            role: prop.agents.role,
            image_url: prop.agents.image_url,
            phone: prop.agents.phone,
            email: prop.agents.email
          } : undefined
        }
      };
    });

    return {
      type: 'FeatureCollection',
      features: features
    };
  }

  // Get nearby properties (radius search)
  async getNearbyProperties(
    lat: number,
    lng: number,
    radius: number = 5
  ): Promise<Property[]> {
    return this.request<Property[]>(
      `/api/properties/nearby?lat=${lat}&lng=${lng}&radius=${radius}`
    );
  }

  // Get property details by ID
  async getProperty(id: string): Promise<Property> {
    return this.request<Property>(`/api/properties/${id}`);
  }

  // Get featured properties
  async getFeaturedProperties(): Promise<Property[]> {
    return this.request<Property[]>('/api/properties/featured');
  }
}

// Export singleton instance
export const apiClient = new APIClient();

// Export class for custom instances
export default APIClient;
