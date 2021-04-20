import React, { useContext } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userStatus } from "state/loginState";
import { IconButton, Button } from "@material-ui/core";
import { PROFILE_ICON } from "constants/pages";
import handleNavigation from "utils/handleNavigation";
import { testUserData } from "constants/testUserData";
import AuthContext from "context/auth/authContext";

const Profile = () => {
  const user = useRecoilValue(userStatus);
  const profile = testUserData.find(
    (person) => person.email === user.username && person.pass === user.password
  );
  const { name, id } = profile;

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  return (
    <IconButton component="a" href={handleNavigation("profile", name, id)}>
      {PROFILE_ICON}
    </IconButton>
  );
};

const LoginStatus = () => {
  const authContext = useContext(AuthContext);
  const { user, logout } = authContext;
  let status = user ? "logout" : "login";
  console.log(user);
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
  const { user, logout, isAuthenticated } = authContext;
  let status = user ? "Logout" : "Login";

  return (
    <>
      <LoginStatus />
      {status === "logout" && <Profile />}
    </>
  );
};

export default LoginButton;
