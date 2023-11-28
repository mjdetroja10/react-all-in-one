import { createTheme } from "@mui/material";
import { red, yellow } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      contrastText: "#47008F",
    },
    error: {
      main: red[100],
    },
    warning: {
      main: yellow[100],
    },
  },
});
