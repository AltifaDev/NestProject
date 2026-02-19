import { useEffect, useState } from 'react';
import SearchResultsModal from './SearchResultsModal';
import { apiClient } from '../lib/api-client';
import type { GeoJSONFeatureCollection, SearchFilters } from '../lib/api-client';

export default function SearchModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<GeoJSONFeatureCollection | null>(null);

  // Mock data for simulation
  const MOCK_RESULTS: GeoJSONFeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [100.5619, 13.7367] }, // Asoke
        properties: {
          id: 'mock-1',
          title: 'Luxury Condo Asoke',
          address: 'Sukhumvit 21, Bangkok',
          price: 15900000,
          bedrooms: 2,
          bathrooms: 2,
          livingArea: 85,
          propertyType: 'Condo',
          listingType: 'Sale',
          thumbnail: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          lng: 100.5619,
          lat: 13.7367
        }
      },
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [100.5824, 13.7291] }, // Thong Lo
        properties: {
          id: 'mock-2',
          title: 'The Monument Thong Lo',
          address: 'Thong Lo, Sukhumvit 55',
          price: 45000000,
          bedrooms: 3,
          bathrooms: 3,
          livingArea: 156,
          propertyType: 'Condo',
          listingType: 'Sale',
          thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          lng: 100.5824,
          lat: 13.7291
        }
      },
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [100.5408, 13.7431] }, // Tonson
        properties: {
          id: 'mock-3',
          title: 'Sindhorn Residence',
          address: 'Tonson One, Lumpini',
          price: 32500000,
          bedrooms: 2,
          bathrooms: 2,
          livingArea: 105,
          propertyType: 'Condo',
          listingType: 'Sale',
          thumbnail: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          lng: 100.5408,
          lat: 13.7431
        }
      },
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [100.5309, 13.7224] }, // Silom
        properties: {
          id: 'mock-4',
          title: 'Silom Suite Penthouse',
          address: 'Silom Road, Bang Rak',
          price: 28000000,
          bedrooms: 3,
          bathrooms: 2,
          livingArea: 145,
          propertyType: 'Condo',
          listingType: 'Sale',
          thumbnail: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          lng: 100.5309,
          lat: 13.7224
        }
      },
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [100.4930, 13.7545] }, // Riverside
        properties: {
          id: 'mock-5',
          title: 'Riverside Villa',
          address: 'Charoen Nakhon, Bangkok',
          price: 55000000,
          bedrooms: 4,
          bathrooms: 4,
          livingArea: 320,
          propertyType: 'House',
          listingType: 'Sale',
          thumbnail: 'https://images.unsplash.com/photo-1600596542815-2a4d9f6fac90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
          lng: 100.4930,
          lat: 13.7545
        }
      }
    ]
  };

  useEffect(() => {
    const handleOpenModal = async (event: Event) => {
      const customEvent = event as CustomEvent;
      const { filters } = customEvent.detail as { filters: SearchFilters };

      console.log('🔍 Opening search panel with filters:', filters);

      setIsOpen(true);
      setIsLoading(true);
      setSearchResults(null);

      try {
        console.log('📡 Calling API...');
        const results = await apiClient.searchProperties(filters);
        console.log('✅ API Response:', results);

        if (!results || !results.features) {
          setSearchResults({ type: 'FeatureCollection', features: [] });
        } else {
          setSearchResults(results);
        }
      } catch (error) {
        console.error('❌ Search failed:', error);
        // Fallback to mock data on error as well for demonstration
        console.log('⚠️ Search failed, using MOCK data for simulation');
        setSearchResults(MOCK_RESULTS);
      } finally {
        setIsLoading(false);
        console.log('✅ Panel should be open now');
      }
    };

    window.addEventListener('openSearchModal', handleOpenModal as EventListener);

    return () => {
      window.removeEventListener('openSearchModal', handleOpenModal as EventListener);
    };
  }, []);

  return (
    <SearchResultsModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      searchResults={searchResults}
      isLoading={isLoading}
    />
  );
}
