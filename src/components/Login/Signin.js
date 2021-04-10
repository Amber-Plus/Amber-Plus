import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useSetRecoilState } from 'recoil';
import { loginStatus, userStatus } from 'state/loginState';
import { testUserData } from 'constants/testUserData';
// import handleNavigation from 'utils/handleNavigatsion';
import AuthContext from '../../context/auth/authContext';

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: '70vh',
    width: 280,
    margin: '20px auto',
  },
  avatarStyle: {
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

const Signin = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [error, isAuthenticated, props.history]);

  const classes = useStyles();
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const [user, setUser] = useState({ email: '', password: '' });
  const setLoginState = useSetRecoilState(loginStatus);
  const setUserState = useSetRecoilState(userStatus);

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (email === '' || password === '') {
      login({
        email,
        password,
      });
    }
  };

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align='center'>
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h3' className={classes.title}>
            Login
          </Typography>
        </Grid>
        <TextField
          type='email'
          name='email'
          value={email}
          id='email'
          label='Email'
          placeholder='Enter username'
          onChange={onChange}
          fullWidth
          required
        />
        <TextField
          name='password'
          value={password}
          id='password'
          label='Password'
          placeholder='Enter password'
          type='password'
          onChange={onChange}
          fullWidth
          required
        />
        <Button
          type='submit'
          color='primary'
          variant='contained'
          component='a'
          onClick={() => handleSubmit()}
          // href={handleNavigation('profile', user.name, user.id)}
          className={classes.btnStyle}
          fullWidth
        >
          Sign in
        </Button>

        <Typography>
          {' '}
          Don't have an account? <Link href='/login'>Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signin;
