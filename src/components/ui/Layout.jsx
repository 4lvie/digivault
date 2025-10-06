import Drawer from "./Drawer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

/**
 * Main layout component that wraps all pages with navigation
 * Shows navbar only for authenticated users
 * @returns {JSX.Element} Layout with drawer, conditional navbar, and page content
 */
function Layout() {
  const user = useAuth();

  return (
    <Drawer>
      {user ? <NavBar path={"/"} /> : null}
      <div className="p-4">
        <Outlet />
      </div>
    </Drawer>
  );
}

export default Layout;
