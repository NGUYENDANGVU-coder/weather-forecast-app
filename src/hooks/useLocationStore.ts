import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TLocationResponse } from '@/types';
import { LOCATION_DEFAULT } from '@/constants';

type TLocationStore = {
  locations: TLocationResponse[];
  selectedLocation: TLocationResponse;
  addLocation: (location: TLocationResponse) => void;
  deleteLocation: (locationId: string) => void;
  setSelectedLocation: (location: TLocationResponse) => void;
};

export const createLocationId = (location: TLocationResponse): string => {
  return `${location.lat}-${location.lon}`;
};

export const useLocationStore = create<TLocationStore>()(
  persist(
    (set, get) => ({
      locations: [],
      selectedLocation: LOCATION_DEFAULT,
      addLocation: (location: TLocationResponse) => {
        const locationId = createLocationId(location);
        const { locations } = get();

        // Check if location already exists
        const existingLocationIndex = locations.findIndex(
          (loc) => createLocationId(loc) === locationId,
        );

        if (existingLocationIndex !== -1) {
          // Move existing location to top (most recent)
          const updatedLocations = [...locations];
          const [existingLocation] = updatedLocations.splice(
            existingLocationIndex,
            1,
          );
          updatedLocations.unshift(existingLocation);

          set({ locations: updatedLocations });
        } else {
          // Add new location to top
          set({
            locations: [location, ...locations],
          });
        }
      },

      deleteLocation: (locationId: string) => {
        const { locations } = get();
        set({
          locations: locations.filter(
            (location) => createLocationId(location) !== locationId,
          ),
        });
        if (
          get().selectedLocation &&
          createLocationId(get().selectedLocation) === locationId
        ) {
          set({ selectedLocation: LOCATION_DEFAULT });
        }
      },
      setSelectedLocation: (location: TLocationResponse) => {
        set({ selectedLocation: location });
      },
    }),
    {
      name: 'location-history-storage',
      version: 1,
    },
  ),
);
