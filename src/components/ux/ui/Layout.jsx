import Drawer from "./Drawer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Drawer>
      <NavBar path={"/"} />
      <div className="p-4">
        <Outlet />
      </div>
    </Drawer>
  );
}

export default Layout;
