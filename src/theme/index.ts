import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import shadows from "./shadows";
import palette from "./palette";

const getTheme = () =>
  responsiveFontSizes(
    createTheme({
      palette: palette(),
      // layout: {
      //   contentWidth: 1236,
      // },
      shadows: shadows(),
      typography: {
        fontFamily: '"Inter", sans-serif',
        button: {
          textTransform: "none",
          fontWeight: "medium",
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            // label: {
            //   fontWeight: 600,
            // },
            containedSecondary: { color: "white" },
          },
        },
      },
    })
  );

export default getTheme;
