import Container from "@/common/Container";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import About from "./components/About";
import App from "./components/App";
import Chargers from "./components/Chargers";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Dashboard from "./components/Dashboard";

const HomeView = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.background.default} position={"relative"}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
        <Box
          component={"svg"}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: "absolute",
            width: "100%",
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: "35%",
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>
      <Container>
        <Highlights />
      </Container>
      <Container>
        <Chargers />
      </Container>
      <Box>
        <Container>
          <Dashboard />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.background.default}>
        <Box
          component={"svg"}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: "100%",
            transform: "scaleY(-1)",
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
        <Container>
          <App />
        </Container>
        </Box>
       
      <Container>
        <About />
      </Container>
    </Box>
  );
};

export default HomeView;
