import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Avatar from "../components/ui/Avatar";
import Button from "../components/ui/Button";
import ProfileForm from "../components/forms/ProfileForm";
import { client } from "../supabase/client";

/**
 * Update user metadata in Supabase
 * @param {Object} metadata - User metadata to update
 */
const updateMetadata = async (metadata) => {
  await client.auth.updateUser({ data: metadata });
};

/**
 * Profile page component that displays and manages user profile information
 * Shows user details, avatar, verification status, and editing capabilities
 * @returns {JSX.Element} User profile page with editing and sign out functionality
 */
function Profile() {
  const user = useAuth();
  const [editing, setEditing] = useState(false);

  /**
   * Handle user sign out
   */
  const handleSignOut = async () => {
    await client.auth.signOut();
  };

  if (!user) {
    throw new Error("User is necessary");
  }

  const {
    name,
    surname,
    email,
    phone,
    avatar_url,
    email_verified,
    phone_verified,
  } = user.user_metadata || {};

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-100 to-fuchsia-200">
      <div className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <div>
          <h1 className="text-2xl font-bold text-center w-full mb-2">
            My profile
          </h1>
        </div>
        <Avatar
          src={avatar_url}
          alt={name || "Profile photo"}
          size="xl"
          className="mb-4"
        />
        <div className="w-full text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">
            {name} {surname}
          </h2>
          <p className="text-gray-600 mb-1">
            Email: <b>{email}</b>
          </p>
          <p>
            Email verified:{" "}
            <input type="checkbox" disabled checked={email_verified} />
          </p>
          <p className="text-gray-600 mb-1">
            Phone: <b>{phone || "-"}</b>
          </p>
          <p>
            Phone verified:{" "}
            <input type="checkbox" disabled checked={phone_verified} />
          </p>
        </div>
        <div className="flex justify-around gap-2">
          <Button onClick={() => setEditing(true)} className="mb-2">
            Edit Profile
          </Button>
          <Button variant="error" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
        {editing && (
          <ProfileForm
            initialData={{ name, surname, email, phone, avatar_url }}
            onClose={() => setEditing(false)}
            onSubmit={updateMetadata}
          />
        )}
      </div>
    </div>
  );
}

export default Profile;
