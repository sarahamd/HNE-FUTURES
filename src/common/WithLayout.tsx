import getTheme from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import React from "react";

type Props = {
  component: any;
  layout: any;
};

export default function WithLayout({
  component: Component,
  layout: Layout,
  ...rest
}: Props) {
  React.useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  const themeMode = "light";
  const paletteType = "green";

  return (
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Paper elevation={0}>
        <Layout themeMode={themeMode} paletteType={paletteType}>
          <Component
            themeMode={themeMode}
            paletteType={paletteType}
            {...rest}
          />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
}
