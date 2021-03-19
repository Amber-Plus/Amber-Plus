import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Routes from "./routes";
import theme from "./theme";
import "leaflet/dist/leaflet.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
