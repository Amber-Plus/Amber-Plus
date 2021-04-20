import React, { useContext } from "react";
import { IconButton, Button } from "@material-ui/core";
import { PROFILE_ICON } from "constants/pages";
import handleNavigation from "utils/handleNavigation";
import AuthContext from "context/auth/authContext";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { name, _id } = user;

  return (
    <IconButton component="a" href={handleNavigation("profile", name, _id)}>
      {PROFILE_ICON}
    </IconButton>
  );
};

const LoginButton = () => {
  const authContext = useContext(AuthContext);
  const { user, logout } = authContext;
  user && localStorage.setItem("user", JSON.stringify(user));
  const userLocal = localStorage.getItem("user");
  let status = userLocal ? "logout" : "login";

  const handleOnClick = () => {
    if (status === "logout") {
      logout();
      localStorage.clear();
    }
  };

  return (
    <>
      <Button
        component="a"
        href={status === "login" ? "/login" : "/missing"}
        onClick={() => handleOnClick()}
      >
        {status}
      </Button>
      {status === "logout" && <Profile />}
    </>
  );
};

export default LoginButton;
