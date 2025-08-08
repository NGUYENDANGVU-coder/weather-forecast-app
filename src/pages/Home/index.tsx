import CurrentForecast from './components/CurrentForecast';
import WeekForecast from './components/WeekForecast';

const Home = () => {
  return (
    <section className="py-4 space-y-4 px-4 md:px-0">
      <CurrentForecast />
      <WeekForecast />
    </section>
  );
};

export default Home;
