import { useAuth } from "../../context/AuthContext";
import Loading from "../ui/Loading";

function UserGranted({ children }) {
  const user = useAuth();

  if (!user)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Loading />
      </div>
    );

  return children;
}

export default UserGranted;
