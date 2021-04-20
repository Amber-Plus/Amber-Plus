import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import AuthContext from "../../context/auth/authContext";

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
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;
  //email
  const [email, setEmail] = useState();
  const [emailConfirm, setEmailConfirm] = useState();
  //password
  const [pass, setPass] = useState();
  const [passConfirm, setPassConfirm] = useState();
  //name
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  //error handling
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  //helper text
  const [helperText, setHelperText] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error === "Invalid Credentials") {
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const handleSubmit = () => {
    const name = `${fName} ${lName}`;
    const profile = { name: name, email: email, pass: pass };

    profile.email !== "" && register(profile);
  };

  useEffect(() => {
    if (pass !== passConfirm) {
      setPassError(true);
      setHelperText("Passwords do not match");
    } else if (email !== emailConfirm) {
      setEmailError(true);
      setHelperText("Emails do not match");
    } else {
      setPassError(false);
      setEmailError(false);
      setHelperText("");
    }
  }, [pass, passConfirm, email, emailConfirm]);

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
            helperText={emailError && helperText}
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
            helperText={emailError && helperText}
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
            helperText={passError && helperText}
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
            helperText={passError && helperText}
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
          href={"/"}
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
