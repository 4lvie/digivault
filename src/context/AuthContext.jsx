import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../supabase/client";
import { useNavigate } from "react-router";

const authContext = createContext(null);

const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [authInfo, setAuthInfo] = useState(null);

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
