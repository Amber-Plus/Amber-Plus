import React, { useState, useEffect } from "react";
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
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { useSetRecoilState } from "recoil";
import { loginStatus, userStatus } from "state/loginState";
import { userData } from "state/userState";
import { testUserData } from "constants/testUserData";
import handleNavigation from "utils/handleNavigation";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: "70vh",
    width: 480,
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
  inputField: {
    marginBottom: theme.spacing(1.5),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [emailConfirm, setEmailConfirm] = useState();
  const [pass, setPass] = useState();
  const [passConfirm, setPassConfirm] = useState();
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");
  const [passHelper, setPassHelper] = useState("");
  const [user, setUser] = useState({ name: "", id: "" });

  const setLoginState = useSetRecoilState(loginStatus);
  const setUserState = useSetRecoilState(userStatus);
  const setUserDataState = useSetRecoilState(userData);

  const handleSubmit = () => {
    const id = `a${testUserData.length + 1}`;
    const name = `${fName} ${lName}`;
    const profile = { id: id, name: name, email: email, pass: pass };

    setUserDataState([...userData, profile]);
    setUser({ name: name, id: id });
    setLoginState("logout");
    setUserState({ username: email, password: pass });
  };

  useEffect(() => {
    if (pass !== passConfirm) {
      setPassError(true);
      setPassHelper("Passwords do not match");
    } else {
      setPassError(false);
      setPassHelper("");
    }
  }, [pass, passConfirm]);

  useEffect(() => {
    if (email !== emailConfirm) {
      setEmailError(true);
      setEmailHelper("Emails do not match");
    } else {
      setEmailError(false);
      setEmailHelper("");
    }
  }, [email, emailConfirm]);

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align="center">
          <Avatar className={classes.avatarStyle}>
            <BorderColorIcon />
          </Avatar>
          <Typography variant="h3" className={classes.title}>
            Sign Up
          </Typography>
        </Grid>
        <Grid container justify="space-between">
          <Grid item xs={6} style={{ paddingRight: "8px" }}>
            <TextField
              id="firstName"
              label="First Name"
              placeholder="Enter your first name"
              onChange={(e) => setFName(e.target.value)}
              fullWidth
              required
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: "8px" }}>
            <TextField
              id="lastName"
              label="Last Name"
              placeholder="Enter your last name"
              onChange={(e) => setLName(e.target.value)}
              fullWidth
              required
              className={classes.inputField}
            />
          </Grid>
        </Grid>
        <Grid container>
          <TextField
            error={emailError}
            helperText={emailHelper}
            id="email"
            label="Email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            className={classes.inputField}
          />
          <TextField
            error={emailError}
            helperText={emailHelper}
            id="emailConfirm"
            label="Confirm Email"
            placeholder="Confirm email"
            onChange={(e) => setEmailConfirm(e.target.value)}
            fullWidth
            required
            className={classes.inputField}
          />
          <TextField
            error={passError}
            helperText={passHelper}
            id="password"
            label="Password"
            placeholder="Enter password"
            type="password"
            onChange={(e) => setPass(e.target.value)}
            fullWidth
            required
            className={classes.inputField}
          />
          <TextField
            error={passError}
            helperText={passHelper}
            id="passwordConfirm"
            label="Confirm Password"
            placeholder="Confirm password"
            type="password"
            onChange={(e) => setPassConfirm(e.target.value)}
            fullWidth
            required
            className={classes.inputField}
          />
        </Grid>

        <Button
          disabled={emailError || passError}
          type="submit"
          color="primary"
          variant="contained"
          component="a"
          onClick={() => handleSubmit()}
          href={handleNavigation("profile", user.name, user.id)}
          className={classes.btnStyle}
          fullWidth
        >
          Sign Up
        </Button>

        <Typography>
          Already have an account? <Link href="/login">Sign In</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;
