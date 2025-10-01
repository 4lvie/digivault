import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { client } from "../supabase/client";
import Button from "../components/ui/Button";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const { error } = await client.auth.signUp({
        email,
        password,
      });
      if (error) setErrorMsg(error.message);
      else navigate("/login");
    } catch (error) {
      setErrorMsg("Sign up failed. Please try again.");
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await client.auth.getUser();
      if (data?.user) {
        navigate("/");
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
      <div className="card w-full max-w-md bg-white shadow-xl p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Create Account
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
            placeholder="your-password"
            className="input input-bordered input-info w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button variant="primary" type="submit" className="px-6 py-3 flex-1">
            Sign Up
          </Button>
          {errorMsg && (
            <div className="alert alert-error mt-2 py-2 px-4 text-sm">
              {errorMsg}
            </div>
          )}
        </form>
        <div className="mt-6 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
