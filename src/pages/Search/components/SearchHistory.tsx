import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { createLocationId, useLocationStore } from '@/hooks/useLocationStore';
import type { TLocationResponse } from '@/types';
import { Search, Trash2 } from 'lucide-react';
interface SearchHistoryProps {
  onLocationChange: (location: TLocationResponse) => void;
}
const SearchHistory: React.FC<SearchHistoryProps> = ({ onLocationChange }) => {
  const { locations, deleteLocation } = useLocationStore();
  if (!locations || locations.length === 0) {
    return <div>No search history yet.</div>;
  }

  return (
    <div>
      <h2 className="font-semibold">Search History</h2>
      <ScrollArea className="bg-white rounded-lg shadow-lg mt-2">
        {locations.map((location) => {
          const locationId = createLocationId(location);

          return (
            <div
              key={locationId}
              className="flex items-center text-sm md:text-base justify-between px-4 py-4 cursor-pointer border-b last:border-b-0 transition-colors group"
              onClick={() => onLocationChange(location)}
            >
              <div className="text-muted-foreground font-medium">
                {location.name}, {location.country}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 cursor-pointer"
                  onClick={() => onLocationChange(location)}
                >
                  <Search className="h-4 w-4 text-muted-foreground" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteLocation(locationId);
                  }}
                >
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          );
        })}
      </ScrollArea>
    </div>
  );
};

export default SearchHistory;
