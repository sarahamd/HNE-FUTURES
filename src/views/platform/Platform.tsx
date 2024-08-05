import Container from "@/common/Container";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import CaseFleet from "./components/CaseFleet";
import CaseResidential from "./components/CaseResidential";
import CtaSection from "./components/CtaSection";
import Features from "./components/Features";
import Headline from "./components/Headline";

const PlatformView = () => {
  const theme = useTheme();

  return (
    <Box>
      <Container>
        <Headline />
      </Container>
      <Box bgcolor={theme.palette.background.default}>
        <Container>
          <Features />
        </Container>
      </Box>
      <Container>
        <CaseResidential />
      </Container>
      <Container>
        <CaseFleet />
      </Container>
      <Box maxWidth={"100%"} bgcolor={theme.palette.background.default}>
        <Container>
          <CtaSection />
        </Container>
      </Box>
    </Box>
  );
};

export default PlatformView;
