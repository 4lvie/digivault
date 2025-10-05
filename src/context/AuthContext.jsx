import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../supabase/client";

const authContext = createContext(null);

const useAuth = () => {
    const context = useContext(authContext);
    return context;
}

async function fetchAuthInfo() {
    return (await client.auth.getUser()).data.user;
}

function AuthProvider({ children }) {
    const [authInfo, setAuthInfo] = useState(null);

    useEffect(() => {
        fetchAuthInfo().then((user) => {
            setAuthInfo(user);
        })
    }, []);

    return <authContext.Provider value={authInfo}>{
        children
    }</authContext.Provider>;
}

export default AuthProvider;
export { useAuth };