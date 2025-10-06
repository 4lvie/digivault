import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../supabase/client";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import LinkButton from "../components/ui/LinkButton";
import HomeButton from "../components/ui/HomeButton";

/**
 * Sign up page component for user registration
 * Handles account creation with email/password and redirects to login
 * Includes form validation and error handling
 * @returns {JSX.Element} Registration form with validation and navigation
 */
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  /**
   * Handle sign up form submission
   * Creates new user account and redirects to login page
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      // Create new user account
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
    <div className="min-h-screen flex gap-5 flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
      <HomeButton />
      <Card className="w-full bg-white max-w-md p-8">
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
        <div className="mt-6 text-center text-gray-500 text-sm flex flex-col justify-center items-center">
          <p>Already have an account?</p>
          <LinkButton to="/login" className="link link-primary">
            Login
          </LinkButton>
        </div>
      </Card>
    </div>
  );
}

export default SignUp;
