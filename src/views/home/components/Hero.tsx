import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Link from "next/link";

const Hero = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems="center" xs={12} md={6}>
        <Box data-aos="fade-up">
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="textPrimary"
              sx={{
                fontWeight: 700,
              }}
            >
              Our{" "}
              <Typography
                color={"primary"}
                component={"span"}
                variant={"inherit"}
              >
                Future
              </Typography>{" "}
              <br />
              Starts Today
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="textSecondary"
              sx={{ fontWeight: 400 }}
            >
              Enter the world of E-mobility with our smart charging solutions
              for Electric Cars, Motorcycles, and Scooters.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "stretched", sm: "flex-start" }}
          >
            <Button
              component={Link}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              href="/smart-chargers"
            >
              Get a Smart Charger
            </Button>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: "100%", md: "auto" }}
            >
              <Button
                component={Link}
                href={"/app"}
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
              >
                Get the Charging App
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={"center"}
        justifyContent={"center"}
        xs={12}
        md={6}
        data-aos={"fade-up"}
      >
        <Box
          component={LazyLoadImage}
          height={"100%"}
          width={"100%"}
          src={"/chargers/hero.jpg"}
          alt="Model Y Smart Charger mounted on the wall and connected to an electric car"
          effect="blur"
          boxShadow={3}
          borderRadius={4}
          maxWidth={600}
          maxHeight={500}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
