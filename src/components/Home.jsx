import { Link, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import { client } from "../supabase/client";
import { useEffect } from "react";

function Home() {

  const navigate = useNavigate();

   /*useEffect(() => {
    async function checkUser() {
      const { data, error } = await client.auth.getUser();
      if (!data.user || error) {
        navigate("/login");
        console.log("No user logged in, redirecting to login."), data.user;
      }
    }
    checkUser();
  }, [navigate]);*/

  const handleSignOut = async () => {
    const { error } = await client.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <h2>Home</h2>
      <button className="btn btn-info" onClick={handleSignOut}>
        Sign Out
        </button>
    </div>
  );
}

export default Home;