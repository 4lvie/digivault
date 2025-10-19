import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../supabase/client";
import Card from "../components/ui/Card";
import LinkButton from "../components/ui/LinkButton";
import HomeButton from "../components/ui/HomeButton";
import AuthForm from "../components/forms/AuthForm";
import Toast from "../components/ui/Toast";
import Modal from "../components/ui/Modal";

/**
 * Sign up page component for user registration
 * Handles account creation with email/password and redirects to login
 * Includes form validation and error handling
 * @returns {JSX.Element} Registration form with validation and navigation
 */
function SignUp() {
  const modalRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const [formIsLoading, setFormIsLoading] = useState(false);
  const navigate = useNavigate();

  /**
   * Handle sign up form submission.
   * Creates new user account sending an email to the user registering.
   */
  const handleSubmit = async ({ email, password }) => {
    setErrorMsg("");
    try {
      setFormIsLoading(true);
      // Create new user account
      const { error } = await client.auth.signUp({
        email,
        password,
      });
      if (error) {
        setErrorMsg(error.message);
      } else {
        modalRef.current.showModal(); //show email modal
      }
    } catch (error) {
      setErrorMsg("Sign up failed. Please try again.");
    }
    setFormIsLoading(false);
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
      {/*Inform user to review mail*/}
      <div>
        <Modal onClose={() => modalRef.current.close()} ref={modalRef}>
          <p>Check mail inbox for ending authetication process.</p>
          <LinkButton to="/login" className="link link-primary">
            Return to Login
          </LinkButton>
        </Modal>
      </div>
      <Card className="w-full bg-white max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Create Account
        </h2>
        <AuthForm
          onSubmit={handleSubmit}
          buttonName={"Sign Up"}
          errorMsg={errorMsg}
          isLoading={formIsLoading}
        />
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
