import { useEffect } from "react";
import { client } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

function Home() {
  const navigate = useNavigate();
  const user = useAuth();

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
      <h1 className="text-2xl">Welcome {user?.user_metadata.name}</h1>
      <Button variant="primary" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Home;
