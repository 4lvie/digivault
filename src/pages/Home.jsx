import { client } from "../supabase/client";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

function Home() {
  const user = useAuth();

  const handleSignOut = async () => {
    await client.auth.signOut();
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Welcome {user?.user_metadata.name}</h1>
      {user ? <Button variant="primary" onClick={handleSignOut}>
        Sign Out
      </Button> : <Link className="link link-primary" to="/login">Login</Link>}
    </div>
  );
}

export default Home;
