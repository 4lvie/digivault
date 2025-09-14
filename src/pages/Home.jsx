import Login from "./Login";
import TaskForm from "../components/TaskForm";
import { useEffect } from "react";
import { client } from "../supabase/client";
import { Link, useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";

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
      <h2>Home</h2>
      <button className="btn btn-info" onClick={handleSignOut}> Sign Out </button>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default Home;