import { weatherService } from "@/services/weatherService";
import type {
  TForecastResponse,
  TWeatherParams,
  TWeatherResponse,
} from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrentWeather = (params: TWeatherParams) =>
  useQuery<TWeatherResponse, Error>({
    queryKey: ["currentWeather", params],
    queryFn: () => weatherService.getCurrentWeather(params),
    enabled: !!params.lat && !!params.lon,
  });

export const useGetForecastWeather = (params: TWeatherParams) =>
  useQuery<TForecastResponse, Error>({
    queryKey: ["forecastWeather", params],
    queryFn: () => weatherService.getForecastWeather(params),
    enabled: !!params.lat && !!params.lon,
  });
