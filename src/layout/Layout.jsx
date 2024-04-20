import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-BG-Color">
      <Outlet />
    </div>
  );
}

export default Layout;