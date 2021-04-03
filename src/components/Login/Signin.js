import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  },
  avatarStyle: {
    backgroundColor: theme.palette.secondary.light,
  },
  btnStyle: {
    margin: theme.spacing(3, 0, 1),
  },
  title: {
    fontWeight: "bold",
    marginTop: theme.spacing(1.5),
  },
}));

const Signin = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align="center">
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h3" className={classes.title}>
            Login
          </Typography>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.btnStyle}
          fullWidth
        >
          Sign in
        </Button>

        <Typography>
          {" "}
          Don't have an account? <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signin;
