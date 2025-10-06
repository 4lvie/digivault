import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../supabase/client";
import { useNavigate } from "react-router";

// Authentication context for managing user state
const authContext = createContext(null);

/**
 * Custom hook to access authentication context
 * @returns {Object|null} Current authenticated user or null
 */
const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

/**
 * Authentication provider component that manages user session state
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components that need auth context
 * @returns {JSX.Element} Provider component with authentication state
 */
function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [authInfo, setAuthInfo] = useState(null);

  // Listen for authentication state changes and redirect on logout
  useEffect(() => {
    client.auth.onAuthStateChange((event, session) => {
      if (session) {
        setAuthInfo(session.user);
      } else {
        setAuthInfo(null);
        navigate("/");
      }
    });
  }, []);

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}

export default AuthProvider;
export { useAuth };
