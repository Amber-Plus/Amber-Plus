import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';
import theme from './theme';
import 'leaflet/dist/leaflet.css';
import './index.css';
import AuthState from './context/auth/AuthState';

ReactDOM.render(
  <AuthState>
    <React.StrictMode>
      <RecoilRoot>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </RecoilRoot>
    </React.StrictMode>
  </AuthState>,
  document.getElementById('root')
);
