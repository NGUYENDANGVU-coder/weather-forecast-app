import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import MainLayout from "./layouts";

export function QueryHandler() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route element={<MainLayout />}>
        {ROUTES.map((r) => (
          <Route key={r.path} path={r.path} element={<r.component />} />
        ))}
        <Route path="*" element={<div className="p-4">404 Not Found</div>} />
      </Route>
    </Routes>
  );
}
