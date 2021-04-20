import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';
import theme from './theme';
import 'leaflet/dist/leaflet.css';

import PersonAlertState from './context/personAlert/PersonAlertState';
import AuthState from './context/auth/AuthState';
import './index.css';

ReactDOM.render(
  <AuthState>
    <PersonAlertState>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </PersonAlertState>
  </AuthState>,
  document.getElementById('root')
);
