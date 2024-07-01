import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <div>Redirecting...</div>;
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};

export default Login;
