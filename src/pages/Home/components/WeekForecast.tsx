import { Loader } from '@/components/common/Loader';
import WeatherIcon from '@/components/common/WeatherIcon';
import { useLocationStore } from '@/hooks/useLocationStore';
import { useGetForecastWeather } from '@/hooks/useWeather';
import type { TForecastListItem, TWeatherParams } from '@/types';
import { getHourFromTimestamp } from '@/utils/getHour';
import { format, isToday } from 'date-fns';
import { useMemo } from 'react';
interface ForecastItemProps {
  time: number;
  weather: {
    code: string;
    description: string;
  };
  temp: {
    max: number;
    min: number;
  };
}
const ForecastItem = ({ time, weather, temp }: ForecastItemProps) => {
  return (
    <div className="flex items-center space-x-4 py-2 text-xs lg:text-base">
      <div className="font-semibold text-base">
        {getHourFromTimestamp(time)}
      </div>

      <div className="flex items-center gap-2 flex-1">
        <WeatherIcon code={weather.code} size={52} />
        <div className="text-gray-500">
          {temp.max.toFixed(2)}/{temp.min.toFixed(2)}°C
        </div>
      </div>

      <div className="font-semibold">{weather.description}</div>
    </div>
  );
};
const WeekForecast = () => {
  const { selectedLocation } = useLocationStore();
  const { data: forecastWeather, isLoading } = useGetForecastWeather({
    lat: selectedLocation.lat,
    lon: selectedLocation.lon,
  } as TWeatherParams);

  const groupedWeather = useMemo(() => {
    if (!forecastWeather) return {};
    return forecastWeather.list.reduce(
      (acc, forecast) => {
        const date = format(new Date(forecast.dt * 1000), 'MMMM dd');
        acc[date] = [...(acc[date] || []), forecast];
        return acc;
      },
      {} as Record<string, TForecastListItem[]>,
    );
  }, [forecastWeather]);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      <h2 className="text-lg font-medium wrapper bg-transparent mb-2">
        5-day Forecast(3 Hours)
      </h2>

      <div className="wrapper shadow-xl p-4 rounded-2xl bg-white space-y-4">
        {Object.entries(groupedWeather).map(([date, items], index) => (
          <div key={date}>
            <p className="text-secondary text-sm">
              {index === 0 && isToday(new Date(items[0].dt * 1000))
                ? 'Today'
                : date}
            </p>
            <div>
              {items.map((forecast, index) => (
                <ForecastItem
                  key={index}
                  time={forecast.dt}
                  temp={{
                    max: forecast.main.temp_max,
                    min: forecast.main.temp_min,
                  }}
                  weather={{
                    code: forecast.weather[0].icon,
                    description: forecast.weather[0].description,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeekForecast;
