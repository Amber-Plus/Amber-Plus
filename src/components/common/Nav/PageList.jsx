import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { PAGES, usePageStatus } from "constants/pages";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .Mui-selected": {
      backgroundColor: "inherit",
      color: theme.palette.primary.main,
    },
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.main,
    },
  },
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

const PageItem = ({ page, selected }) => {
  const classes = useStyles();
  const { label, route, icon } = usePageStatus(page);
  const isSelected = selected === route;

  return (
    <div className={clsx(isSelected && classes.root)}>
      <ListItem button component="a" href={route} selected={isSelected}>
        <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    </div>
  );
};

const PageList = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)", {
    noSsr: true,
  });
  const selected = window.location.pathname;

  return (
    <List className={clsx(isMobile ? classes.mobileList : classes.list)}>
      {PAGES.map((page) => (
        <PageItem page={page} key={page} selected={selected} />
      ))}
    </List>
  );
};

export default PageList;
