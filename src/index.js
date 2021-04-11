import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';
import theme from './theme';
import 'leaflet/dist/leaflet.css';

import AuthState from './context/auth/AuthState';
import './index.css';

ReactDOM.render(
  <AuthState>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </AuthState>,
  document.getElementById('root')
);
