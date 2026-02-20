import { useEffect, useState } from 'react';
import SearchResultsModal from './SearchResultsModal';
import { apiClient } from '../lib/api-client';
import type { GeoJSONFeatureCollection, SearchFilters } from '../lib/api-client';

export default function SearchModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<GeoJSONFeatureCollection | null>(null);

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
        setSearchResults({ type: 'FeatureCollection', features: [] });
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
