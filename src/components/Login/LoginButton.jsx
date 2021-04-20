import React, { useContext } from "react";
import { IconButton, Button } from "@material-ui/core";
import { PROFILE_ICON } from "constants/pages";
import handleNavigation from "utils/handleNavigation";
import AuthContext from "context/auth/authContext";

const Profile = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const { name, _id } = user;

  return (
    <IconButton component="a" href={handleNavigation("profile", name, _id)}>
      {PROFILE_ICON}
    </IconButton>
  );
};

const LoginStatus = () => {
  const authContext = useContext(AuthContext);
  const { user, logout } = authContext;
  let status = user ? "logout" : "login";

  const handleOnClick = () => {
    status === "logout" && logout();
  };

  return (
    <Button
      component="a"
      href={status === "login" ? "/login" : "/missing"}
      onClick={() => handleOnClick()}
    >
      {status}
    </Button>
  );
};

const LoginButton = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  let status = user ? "logout" : "login";

  return (
    <>
      <LoginStatus />
      {status === "logout" && <Profile />}
    </>
  );
};

export default LoginButton;
