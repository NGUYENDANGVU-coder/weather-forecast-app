import { ROUTE_PATHS } from '@/constants';
import Home from '@/pages/Home';
import Search from '@/pages/Search';

type RouteItem = {
  label: string;
  path: string;
  component: React.ComponentType;
};
export const ROUTES: RouteItem[] = [
  {
    label: 'Home',
    path: ROUTE_PATHS.HOME,
    component: Home,
  },
  {
    label: 'Search',
    path: ROUTE_PATHS.SEARCH,
    component: Search,
  },
];
