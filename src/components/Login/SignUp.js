import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import { withRouter } from "react-router-dom";
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

  const [user, setUser] = useState({
    name: "",
    email: "",
    email2: "",
    password: "",
    password2: "",
  });

  const { email, email2, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  //name
  const [fullName, setFullName] = useState({ fName: "", lName: "" });
  const { fName, lName } = fullName;
  const onNameChange = (e) =>
    setFullName({ ...fullName, [e.target.name]: e.target.value });

  //error handling
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  //helper text
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passHelperText, setPassHelperText] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (password !== password2) {
      setPassError(true);
      setPassHelperText("Passwords do not match");
    } else {
      setPassError(false);
      setPassHelperText("");
    }

    if (email !== email2) {
      setEmailError(true);
      setEmailHelperText("Emails do not match");
    } else {
      setEmailError(false);
      setEmailHelperText("");
    }

    if (error === "Invalid Credentials") {
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, password, password2, email, email2]);

  const handleSubmit = () => {
    // e.preventDefault();
    const name = `${fName} ${lName}`;

    if (name === "" || email === "" || password === "") {
      console.log("One or more fields are empty");
    } else if (email === email2 && password === password2) {
      register({
        name,
        email,
        password,
      });
    }
  };

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
              id="fName"
              label="First Name"
              placeholder="Enter your first name"
              name="fName"
              value={fName}
              onChange={onNameChange}
              fullWidth
              required
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: "8px" }}>
            <TextField
              id="lName"
              label="Last Name"
              placeholder="Enter your last name"
              name="lName"
              value={lName}
              onChange={onNameChange}
              fullWidth
              required
              className={classes.inputField}
            />
          </Grid>
        </Grid>
        <Grid container>
          <TextField
            error={emailError}
            helperText={emailError && emailHelperText}
            id="email"
            label="Email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={onChange}
            fullWidth
            required
            className={classes.inputField}
          />
          <TextField
            error={emailError}
            helperText={emailError && emailHelperText}
            id="email2"
            label="Confirm Email"
            placeholder="Confirm email"
            name="email2"
            onChange={onChange}
            fullWidth
            required
            className={classes.inputField}
          />
          <TextField
            error={passError}
            helperText={passError && passHelperText}
            id="password"
            label="Password"
            placeholder="Enter password"
            name="password"
            type="password"
            onChange={onChange}
            fullWidth
            required
            className={classes.inputField}
          />
          <TextField
            error={passError}
            helperText={passError && passHelperText}
            id="passwordConfirm"
            label="Confirm Password"
            placeholder="Confirm password"
            name="password2"
            type="password"
            onChange={onChange}
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
