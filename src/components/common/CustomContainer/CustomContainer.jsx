import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(9),
    },
  },
}));

const CustomContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      {children}
    </Container>
  );
};

export default CustomContainer;
