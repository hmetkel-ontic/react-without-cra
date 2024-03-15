import { colors, createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const theme = createTheme({
  spacing: [0, 4, 8, 16, 20, 24],
  palette: {
    primary: {
      light: "#757ce8",
      main: colors.blueGrey[500],
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: colors.grey[900],
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
