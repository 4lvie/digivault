import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Avatar from "./Avatar";

/**
 * Navigation bar component with hamburger menu, logo, and user avatar
 * @param {Object} props - Component props
 * @param {string} props.path - Current page path for navigation
 * @returns {JSX.Element} Navigation bar with menu toggle and user profile link
 */
function NavBar({ path }) {
  const user = useAuth();

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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to={path}>
          digivault
        </Link>
      </div>
      <div>
        <Link className="mr-2 flex justify-center items-center" to="/profile">
          <Avatar src={user?.user_metadata.avatar_url} />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
