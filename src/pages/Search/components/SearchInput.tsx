import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { locationService } from '@/services/locationService';
import type { TLocationResponse } from '@/types';
import { useClickOutside } from '@/hooks/useClickOutside';
import { ERROR_MESSAGES } from '@/constants/messages';
import { useLocationStore } from '@/hooks/useLocationStore';
interface SearchInputProps {
  onLocationChange: (location: TLocationResponse) => void;
}
const SearchInput: React.FC<SearchInputProps> = ({ onLocationChange }) => {
  const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [locations, setLocations] = useState<TLocationResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const containerRef = useClickOutside(() => setShowDropdown(false));
  const { addLocation } = useLocationStore();
  const handleSearch = async () => {
    const query = searchValue.trim();
    if (!query) {
      setErrorMessage(ERROR_MESSAGES.EMPTY_SEARCH);
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setShowDropdown(false);

    try {
      const results = await locationService.searchLocation({
        q: query,
        limit: 10,
      });
      setLocations(results);
      setShowDropdown(results.length > 0);
      if (results.length === 0) {
        setErrorMessage(ERROR_MESSAGES.INVALID_LOCATION);
      }
    } catch (error) {
      console.error('Search error:', error);
      setErrorMessage(ERROR_MESSAGES.INVALID_LOCATION);
      setLocations([]);
      setShowDropdown(false);
    } finally {
      setIsLoading(false);
    }
  };
  const handleLocationSelect = (location: TLocationResponse) => {
    setSearchValue(`${location.name}, ${location.country}`);
    setShowDropdown(false);
    setErrorMessage('');
    addLocation(location);
    onLocationChange(location);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setErrorMessage('');
    setShowDropdown(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const hasError = Boolean(errorMessage);

  return (
    <div className="relative" ref={containerRef}>
      <div className="flex gap-2">
        <Input
          placeholder="Search country or city here..."
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className={hasError ? 'border-destructive' : ''}
        />
        <Button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </Button>
      </div>

      {hasError && (
        <p className="text-destructive text-sm mt-2">{errorMessage}</p>
      )}

      {showDropdown && locations.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 overflow-auto border border-solid border-gray-300">
          <CardContent className="p-0">
            <ScrollArea className="max-h-60">
              {locations.map((location, index) => (
                <div
                  key={`${location.lat}-${location.lon}-${index}`}
                  className="px-4 py-1 hover:bg-muted cursor-pointer border-b last:border-b-0 transition-colors"
                  onClick={() => handleLocationSelect(location)}
                >
                  <div className="font-medium text-foreground capitalize">
                    {location.name}
                    {location.state && `, ${location.state}`}
                  </div>
                  <div className="text-sm text-muted-foreground capitalize">
                    {location.country}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchInput;
