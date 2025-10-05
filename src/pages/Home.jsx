import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
  const user = useAuth();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Welcome {user?.user_metadata.name}</h1>
      {user ? null : (
        <Link className="link link-primary" to="/login">
          Login
        </Link>
      )}
    </div>
  );
}

export default Home;
