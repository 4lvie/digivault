import { useEffect } from "react";
import { client } from "../supabase/client";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await client.auth.getUser();
      if (error || !data.user) {
        navigate("/login");
        console.log("No user logged in, redirecting to login.");
      }
    };
    checkUser();
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await client.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Home</h1>
      <button className="btn btn-info" onClick={handleSignOut}>
        {" "}
        Sign Out{" "}
      </button>
    </div>
  );
}

export default Home;
