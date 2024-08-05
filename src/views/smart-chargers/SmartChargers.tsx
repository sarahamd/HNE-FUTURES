import Container from "@/common/Container";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import ChargerComparison from "./components/ChargerComparison";
import Gallery from "./components/Gallery";

const SmartChargersView = () => {
  const theme = useTheme();

  return (
    <Box>
      <Container>
        <ChargerComparison />
      </Container>
      <Container>
        <Gallery />
      </Container>
    </Box>
  );
};

export default SmartChargersView;
