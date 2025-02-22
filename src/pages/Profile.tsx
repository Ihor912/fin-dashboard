import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <img src={user?.picture} alt={user?.name} />
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
