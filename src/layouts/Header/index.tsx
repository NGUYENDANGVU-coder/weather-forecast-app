import { ROUTE_PATHS } from "@/constants";
import { useLocationStore } from "@/hooks/useLocationStore";
import { MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { selectedLocation } = useLocationStore();

  return (
    <header className="py-4 bg-white all-center shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center wrapper">
        <Link
          to={ROUTE_PATHS.HOME}
          className="flex items-center gap-1 font-semibold"
        >
          <MapPin size={18} className="text-gray-500" />
          <p>
            {selectedLocation.name}, {selectedLocation.country}
          </p>
        </Link>
        <Link to={ROUTE_PATHS.SEARCH}>
          <Search size={18} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
