import React, { useContext, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import AuthContext from '../../context/auth/authContext';
import PersonAlertContext from '../../context/personAlert/personAlertContext';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiBottomNavigation-root": {
      bottom: 0,
      left: 0,
      position: "fixed",
      width: "100%",
      backgroundColor: theme.palette.background.default,
      zIndex: 1200,
    },
    "& .MuiBottomNavigationAction-root": {
      minWidth: 50,
    },
  },
}));

const Nav = () => {
  const authContext = useContext(AuthContext);
  const personAlertContext = useContext(PersonAlertContext);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 780px)", {
    noSsr: true,
  });

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearPersonAlerts } = personAlertContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearPersonAlerts();
  };

  return (
    <div className={classes.root}>
      <TopNav />
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Nav;
