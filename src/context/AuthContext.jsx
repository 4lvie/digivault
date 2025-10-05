import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../supabase/client";

const authContext = createContext(null);

const useAuth = () => {
    const context = useContext(authContext);
    return context;
}

function AuthProvider({ children }) {
    const [authInfo, setAuthInfo] = useState(null);

    useEffect(() => {
        client.auth.onAuthStateChange((event, session) => {
            if (session) {
                setAuthInfo(session.user);
            }
            else {
                setAuthInfo(null);
            }
        });
    }, []);

    return <authContext.Provider value={authInfo}>{
        children
    }</authContext.Provider>;
}

export default AuthProvider;
export { useAuth };