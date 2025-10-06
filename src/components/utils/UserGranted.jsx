import { useAuth } from "../../context/AuthContext";
import Loading from "../ui/Loading";

/**
 * Authentication wrapper component that protects routes requiring user login
 * Shows loading spinner while checking auth status, renders children if authenticated
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Protected content to render for authenticated users
 * @returns {JSX.Element} Loading spinner or children based on authentication status
 */
function UserGranted({ children }) {
  const user = useAuth();

  if (!user)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Loading />
      </div>
    );

  return children;
}

export default UserGranted;
