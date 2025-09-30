import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { client } from "./supabase/client";

import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    client.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/vault"> Vault </Link>
        <Link to="/explorevault"> Explore Vault </Link>
        <Link to="/profile"> Profile </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
