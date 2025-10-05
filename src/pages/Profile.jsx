import { useAuth } from '../context/AuthContext';
import { client } from '../supabase/client';

const updateMetadata = async (metadata) => {
  await client.auth.updateUser({ data: metadata });
}

function Profile() {
  const user = useAuth();

  if (!user) {
    throw new Error("User is necessary");
  }

  return (
    <div>
      <p>Name: <b>{user.user_metadata.name}</b></p>
    </div>
  );
}

export default Profile;
