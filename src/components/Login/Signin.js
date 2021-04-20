import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import {
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Container
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AuthContext from '../../context/auth/authContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 20,
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
  },
  btnStyle: {
    margin: theme.spacing(3, 0, 1),
  },
  title: {
    fontWeight: 'bold',
    marginTop: theme.spacing(1.5),
  },
}));

const Signin = props => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const classes = useStyles();
  const [user, setUser] = useState({ email: '', password: '' });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    // e.preventDefault();
    if (email !== '' || password !== '') {
      login({
        email,
        password,
      });
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h3' className={classes.title}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id='email'
            type='email'
            name='email'
            value={email}
            label='Email'
            onChange={onChange}
            fullWidth
            required
          />
          <TextField
            id='password'
            type='password'
            name='password'
            value={password}
            label='Password'
            onChange={onChange}
            fullWidth
            required
            minLength='6'
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btnStyle}
            onClick={() => handleSubmit()}
            component="a"
          >
            Sign in
        </Button>

        </form>
        <Typography>
          {' '}
          Don't have an account? <Link href='/login'>Sign Up</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default withRouter(Signin);
