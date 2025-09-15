import { Link } from "react-router-dom";

function NavBar({ path }) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-none">
        <label htmlFor="digivault-pages" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to={path}>
          digivault
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
