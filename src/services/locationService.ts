import httpClient from '@/configs/httpClient';
import { API_KEY } from '@/constants';
import type { TLocationResponse, TSearchLocationParams } from '@/types';

const searchLocation = async (
  params: TSearchLocationParams,
): Promise<TLocationResponse[]> => {
  try {
    const response = await httpClient.get<TLocationResponse[]>(
      '/geo/1.0/direct',
      {
        params: { ...params, appid: API_KEY },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast weather data:', error);
    throw error;
  }
};
export const locationService = {
  searchLocation,
};
