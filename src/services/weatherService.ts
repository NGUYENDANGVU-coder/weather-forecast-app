import httpClient from '@/configs/httpClient';
import { API_KEY } from '@/constants';
import type {
  TForecastResponse,
  TWeatherParams,
  TWeatherResponse,
} from '@/types';

const getCurrentWeather = async (
  params: TWeatherParams,
): Promise<TWeatherResponse> => {
  try {
    const response = await httpClient.get<TWeatherResponse>(
      '/data/2.5/weather',
      {
        params: { ...params, units: 'metric', appid: API_KEY },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather data:', error);
    throw error;
  }
};
const getForecastWeather = async (
  params: TWeatherParams,
): Promise<TForecastResponse> => {
  try {
    const response = await httpClient.get<TForecastResponse>(
      '/data/2.5/forecast',
      {
        params: { ...params, units: 'metric', appid: API_KEY },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast weather data:', error);
    throw error;
  }
};

export const weatherService = {
  getCurrentWeather,
  getForecastWeather,
};
