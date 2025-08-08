import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <main className="min-h-screen min-w-screen bg-blue-100">
      <Header />
      <div className="mt-[56px]">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
