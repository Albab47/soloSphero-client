import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Outlet */}
      <div className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </div>

      {/* Footer */}
    </>
  );
};

export default MainLayout;
