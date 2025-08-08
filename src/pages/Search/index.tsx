import { useNavigate } from "react-router-dom";
import SearchHistory from "./components/SearchHistory";
import SearchInput from "./components/SearchInput";
import type { TLocationResponse } from "@/types";
import { ROUTE_PATHS } from "@/constants";
import { useLocationStore } from "@/hooks/useLocationStore";

const Search = () => {
  const navigate = useNavigate();
  const { setSelectedLocation } = useLocationStore();
  const onLocationChange = (location: TLocationResponse) => {
    setSelectedLocation(location);
    navigate(ROUTE_PATHS.HOME);
  };
  return (
    <div className="py-4 space-y-10 wrapper">
      <SearchInput onLocationChange={onLocationChange} />
      <SearchHistory onLocationChange={onLocationChange} />
    </div>
  );
};

export default Search;
