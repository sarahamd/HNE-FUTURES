import Container from "@/common/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Contact from "./components/Contact";
import Form from "./components/Form";

const ContactView = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Container>
        <Grid container spacing={isMd ? 8 : 4}>
          <Grid item xs={12} md={6}>
            <Contact />
          </Grid>
          <Grid item container xs={12} md={6}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactView;
