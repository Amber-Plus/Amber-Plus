import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { PAGE_ROUTES, HOME } from "constants/pages";
import PageList from "./PageList";
import LoginButton from "components/Login/LoginButton";

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(2),
    backgroundColor: "inherit",
    color: theme.palette.secondary.main,
  },
  drawerCloseIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    textDecoration: "none",
    margin: theme.spacing(0, 4),
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: theme.spacing(2.75),
  },
  mobileTopMenu: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const MobileTopMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (state) => setOpen(state);

  return (
    <>
      <IconButton onClick={() => toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onBackdropClick={() => toggleDrawer(false)}
      >
        <div className={classes.drawerCloseIcon}>
          <IconButton onClick={() => toggleDrawer(false)}>
            <ChevronRightIcon />
          </IconButton>
        </div>

        <PageList />
      </Drawer>
    </>
  );
};

const TopNav = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 780px)", {
    noSsr: true,
  });

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={clsx(isMobile && classes.mobileTopMenu)}>
        <Typography
          component="a"
          href={PAGE_ROUTES[HOME]}
          className={classes.title}
        >
          Amber+
        </Typography>
        <Grid
          container
          justify={isMobile ? "flex-end" : "space-between"}
          alignItems="center"
        >
          <Grid item>{isMobile ? <MobileTopMenu /> : <PageList />}</Grid>
          <Grid item>
            <LoginButton />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
