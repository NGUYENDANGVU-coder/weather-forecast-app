import { Loader } from '@/components/common/Loader';
import WeatherIcon from '@/components/common/WeatherIcon';
import { useLocationStore } from '@/hooks/useLocationStore';
import { useGetCurrentWeather } from '@/hooks/useWeather';
import type { TWeatherParams } from '@/types';
import { format } from 'date-fns';
import { MoveDownLeft } from 'lucide-react';

const CurrentForecast = () => {
  const { selectedLocation } = useLocationStore();
  const { data: currentWeather, isLoading } = useGetCurrentWeather({
    lat: selectedLocation.lat,
    lon: selectedLocation.lon,
  } as TWeatherParams);
  if (isLoading || !currentWeather) {
    return <Loader />;
  }

  return (
    <div className="shadow-xl p-4 rounded-2xl space-y-3 wrapper bg-white">
      <h2 className="text-textSubtle">{format(new Date(), 'MMMM dd, yyyy')}</h2>
      <div className="flex items-center justify-center gap-x-4">
        <WeatherIcon code={currentWeather.weather[0].icon} size={120} />
        <div className="space-y-1 ">
          <p className="text-xl lg:text-5xl font-semibold">
            {currentWeather.main.temp}°C
          </p>
          <p className="font-medium text-gray-700 first-letter:capitalize">
            {currentWeather.weather[0].description}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-sm text-secondary font-medium">Humidity</p>
          <p className="font-semibold">{currentWeather.main.humidity}%</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-secondary font-medium">Winds</p>
          <div className="flex items-center gap-x-1">
            <MoveDownLeft size={14} />
            <span className="font-semibold">
              {currentWeather.wind.speed} m/s
            </span>
          </div>
        </div>
        <div>
          <p className="text-sm text-secondary font-medium">Visibility</p>
          <p className="font-semibold">
            {Number(currentWeather.visibility) / 1000} km
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentForecast;
