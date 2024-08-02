import { createTheme } from "@mui/material";
import type {} from "@mui/x-data-grid/themeAugmentation";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff2739",
      light: "#f4969c",
      dark: "#d1002a",
    },
    secondary: {
      main: "#00e9c8",
      light: "#dff1fc",
      dark: "#00b492",
    },
    success: {
      main: "#1cd93f",
      light: "#62d688",
      dark: "#009f3e",
    },
  },
  typography: {
    fontFamily: "nazanin",
    fontSize: 16,
  },
  direction: "rtl",
});
