import { useState } from "react";
import Button from "../ui/Button";

function AuthForm({ onSubmit = null, buttonName = null, errorMsg = null }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ email, password });
      }}
      className="flex flex-col gap-4"
    >
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
        {buttonName}
      </Button>
      {errorMsg && (
        <div className="alert alert-error mt-2 py-2 px-4 text-sm">
          {errorMsg}
        </div>
      )}
    </form>
  );
}

export default AuthForm;
