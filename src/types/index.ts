export type TWeatherParams = {
  lat: number;
  lon: number;
};

type TWeatherMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
  temp_kf: number;
};

type TWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type TWind = {
  speed: number;
  deg: number;
  gust?: number;
};

type TRain = {
  "1h"?: number;
  "3h"?: number;
};

type TClouds = {
  all: number;
};

type TSys = {
  type?: number;
  id?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
  pod?: string;
};

export type TWeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: TWeather[];
  base: string;
  main: TWeatherMain;
  visibility: number;
  wind: TWind;
  rain?: TRain;
  clouds: TClouds;
  dt: number;
  sys: TSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type TForecastListItem = {
  dt: number;
  main: TWeatherMain;
  weather: TWeather[];
  clouds: TClouds;
  wind: TWind;
  visibility: number;
  pop: number;
  rain?: TRain;
  sys: TSys;
  dt_txt: string;
};

type TCity = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type TForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: TForecastListItem[];
  city: TCity;
};
export type TSearchLocationParams = {
  q: string;
  limit?: number;
};

type TLocalNames = {
  [languageCode: string]: string;
  ascii: string;
  feature_name: string;
};

export type TLocationResponse = {
  name: string;
  local_names?: TLocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
};
