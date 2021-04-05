import React, { useState } from "react";
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
import { testUserData } from "constants/testUserData";
import handleNavigation from "utils/handleNavigation";

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
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const [user, setUser] = useState({ name: "", id: "" });

  const handleSubmit = () => {
    const profile = testUserData.find(
      (person) => person.email === username && person.pass === pass
    );
    setUser(profile);
  };

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
          id="username"
          label="Username"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          required
        />
        <TextField
          id="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          onChange={(e) => setPass(e.target.value)}
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          component="a"
          onClick={() => handleSubmit()}
          href={handleNavigation("profile", user.name, user.id)}
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
