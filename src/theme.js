import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0F4C75",
    },
    secondary: {
      main: "#BBE1FA",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
