import Drawer from "./Drawer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

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
