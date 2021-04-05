import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userStatus } from "state/loginState";
import { IconButton, Button } from "@material-ui/core";
import { PROFILE_ICON } from "constants/pages";
import handleNavigation from "utils/handleNavigation";
import { testUserData } from "constants/testUserData";

const Profile = () => {
  const user = useRecoilValue(userStatus);
  const profile = testUserData.find(
    (person) => person.email === user.username && person.pass === user.password
  );
  const { name, id } = profile;

  return (
    <IconButton component="a" href={handleNavigation("profile", name, id)}>
      {PROFILE_ICON}
    </IconButton>
  );
};

const LoginStatus = () => {
  let status = localStorage.getItem("recoil-persist");
  const setUser = useSetRecoilState(userStatus);

  const storage = JSON.parse(status).loginUser.username !== "";
  status = storage ? "logout" : "login";

  const handleOnClick = () => {
    status === "logout" &&
      setUser({
        username: "",
        password: "",
      });
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
  let status = localStorage.getItem("recoil-persist");

  const storage = JSON.parse(status).loginUser.username !== "";
  status = storage ? "logout" : "login";

  return (
    <>
      <LoginStatus />
      {status === "logout" && <Profile />}
    </>
  );
};

export default LoginButton;
