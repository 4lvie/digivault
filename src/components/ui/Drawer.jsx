import { Link } from "react-router-dom";

function Drawer({ children }) {
  return (
    <div className="drawer">
      <input id="digivault-pages" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="digivault-pages"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explorevault">Explore Vault</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
