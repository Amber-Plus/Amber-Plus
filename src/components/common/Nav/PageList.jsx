import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { PAGES, usePageStatus } from "constants/pages";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
  },
  mobileList: {
    display: "block",
  },
  icon: {
    minWidth: "auto",
    margin: theme.spacing(1),
  },
}));

const PageItem = ({ page }) => {
  const classes = useStyles();
  const { label, route, icon } = usePageStatus(page);

  return (
    <ListItem button component="a" href={route}>
      <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};

const PageList = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)", {
    noSsr: true,
  });

  return (
    <List className={clsx(isMobile ? classes.mobileList : classes.list)}>
      {PAGES.map((page) => (
        <PageItem page={page} key={page} />
      ))}
    </List>
  );
};

export default PageList;
