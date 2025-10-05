import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Avatar from "../components/ui/Avatar";
import Button from "../components/ui/Button";
import ProfileForm from "../components/forms/ProfileForm";
import { client } from '../supabase/client';

const updateMetadata = async (metadata) => {
  console.log({metadata})
  await client.auth.updateUser({ data: metadata });
}


function Profile() {
  const user = useAuth();
  const [editing, setEditing] = useState(false);

  if (!user) {
    throw new Error("User is necessary");
  }

  const { name, surname, email, phone, avatar_url } = user.user_metadata || {};

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
      <Avatar src={avatar_url} alt={name || "Profile photo"} size="xl" className="mb-4" />
      <div className="w-full text-center mb-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">{name} {surname}</h2>
        <p className="text-gray-600 mb-1">Email: <b>{email}</b></p>
        <p className="text-gray-600 mb-1">Phone: <b>{phone || "-"}</b></p>
      </div>
      <Button onClick={() => setEditing(true)} className="mb-2">Edit Profile</Button>
      {editing && (
        <ProfileForm
          initialData={{ name, surname, email, phone, avatar_url }}
          onClose={() => setEditing(false)}
          onSubmit={updateMetadata}
        />
      )}
    </div>
  );
}

export default Profile;
