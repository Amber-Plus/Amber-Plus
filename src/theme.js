import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const baseFont = '"Roboto", sans-serif';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff8984",
      main: "#eb5757",
      dark: "#b3202e",
    },
    secondary: {
      light: "#605f78",
      main: "#36354c",
      dark: "#100f24",
    },
    background: {
      default: "#11342F",
    },
  },
  typography: {
    fontFamily: baseFont,
    htmlFontSize: 12,
    fontSize: 12,
    fontWeight: 300,
    h1: {
      fontFamily: baseFont,
      fontSize: "5rem",
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: baseFont,
      fontSize: "3rem",
    },
    h3: {
      fontFamily: baseFont,
      fontSize: "2rem",
    },
    subtitle1: {
      textTransform: "uppercase",
    },
  },
});

export default responsiveFontSizes(theme);
