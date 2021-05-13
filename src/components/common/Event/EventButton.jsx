import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: 0,
    borderRadius: "50%",
    border: "none",
  },
}));

const EventButton = ({ children }) => {
  const classes = useStyles();

  return <button className={classes.button}>{children} </button>;
};

export default EventButton;
