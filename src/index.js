import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Routes from "./routes";
import theme from "./theme";
import "leaflet/dist/leaflet.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
