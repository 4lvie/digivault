import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../supabase/client";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useAuth } from "../context/AuthContext";
import LinkButton from "../components/ui/LinkButton";
import HomeButton from "../components/ui/HomeButton";
import AuthForm from "../components/forms/AuthForm";

/**
 * Login page component that handles user authentication
 * Includes form validation, error handling, and redirect logic
 * Automatically redirects authenticated users to home page
 * @returns {JSX.Element} Login form with error handling and navigation
 */
function Login() {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const user = useAuth();

  /**
   * Handle login form submission
   * Validates user credentials and manages error states
   */
  const handleSubmit = async ({ email, password }) => {
    setErrorMsg("");
    try {
      // Attempt to sign in with email and password
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
    <div className="min-h-screen gap-5 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <HomeButton />
      <Card className="bg-white w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Sign In
        </h2>
        <AuthForm
          onSubmit={handleSubmit}
          buttonName={"Login"}
          errorMsg={errorMsg}
        />
        <div className="mt-6 text-center text-gray-500 text-sm flex flex-col justify-center items-center">
          <p>Don't have an account?</p>
          <LinkButton to="/signup">Sign up</LinkButton>
        </div>
      </Card>
    </div>
  );
}

export default Login;
