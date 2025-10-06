import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { client } from "../supabase/client";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";
import LinkButton from "../components/ui/LinkButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const user = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const { data, error } = await client.auth.signInWithPassword({
        email,
        password,
        options: { redirectTo: window.location.origin },
      });
      if (error) {
        setErrorMsg(error.message);
        return;
      }
      if (data?.user && data.user.confirmed_at) {
        navigate("/");
      } else {
        setErrorMsg("Please confirm your email before logging in.");
      }
    } catch (error) {
      setErrorMsg("Login failed. Please try again.");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <Card className="bg-white w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="youremail@site.com"
            className="input input-bordered input-info w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="your password"
            className="input input-bordered input-info w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button variant="primary" type="submit" className="px-6 py-3 flex-1">
            Login
          </Button>
          {errorMsg && (
            <div className="alert alert-error mt-2 py-2 px-4 text-sm">
              {errorMsg}
            </div>
          )}
        </form>
        <div className="mt-6 text-center text-gray-500 text-sm flex flex-col justify-center items-center">
          <p>Don't have an account?</p>
          <LinkButton to="/signup">Sign up</LinkButton>
        </div>
      </Card>
    </div>
  );
}

export default Login;
