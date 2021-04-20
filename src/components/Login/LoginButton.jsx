import React, { useContext } from "react";
import { IconButton, Button } from "@material-ui/core";
import { PROFILE_ICON } from "constants/pages";
import handleNavigation from "utils/handleNavigation";
import AuthContext from "context/auth/authContext";
import PersonAlertContext from "../../context/personAlert/personAlertContext";

const Profile = ({ user }) => {
  return (
    <IconButton
      component="a"
      href={user && handleNavigation("profile", user.name, user._id)}
    >
      {PROFILE_ICON}
    </IconButton>
  );
};

const LoginButton = () => {
  const authContext = useContext(AuthContext);
  const personAlertContext = useContext(PersonAlertContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearPersonAlerts } = personAlertContext;

  let status = isAuthenticated ? "logout" : "login";

  const handleOnClick = () => {
    if (status === "logout") {
      logout();
      clearPersonAlerts();
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
      {status === "logout" && <Profile user={user} />}
    </>
  );
};

export default LoginButton;
