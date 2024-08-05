import { APP_LINK_APPLE, APP_LINK_GOOGLE } from "@/constants";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import pictureModelX from "public/chargers/model-x.webp";
import pictureGoogleStore from "public/logos/store-google.webp";
import pictureAppUsage from "public/other/app-usage.jpeg";
import pictureOrangeCar from "public/other/orange-car.webp";
import pictureAppleStore from "public/logos/store-apple.webp";

const App = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item container alignItems={"center"} xs={12} md={6}>
          <Box data-aos={"fade-up"}>
            <Box marginBottom={2}>
              <Typography variant={"h4"} sx={{ fontWeight: 700 }} gutterBottom>
                Make your Charging Smart
              </Typography>
              <Typography variant={"h6"} component={"p"} color="textSecondary">
                <Box component={"span"} fontWeight={400}>
                  HNE Charger Application enables you to fully control your
                  charger and charging activities. Improve your charing
                  experience today.
                </Box>
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "flex-start" }}
            >
              <Box component={"a"} href={APP_LINK_GOOGLE} target="_blank">
                <Image
                  alt="HNE Futures Charging App in Google Store"
                  src={pictureGoogleStore}
                  height={44}
                />
              </Box>
              <Box
                component={"a"}
                href={APP_LINK_APPLE}
                target="_blank"
                marginTop={{ xs: 1, sm: 0 }}
                marginLeft={{ sm: 2 }}
              >
                <Image
                  alt="HNE Futures Charging App in AppStore"
                  src={pictureAppleStore}
                  height={44}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            height={"100%"}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box
              component={Image}
              src={pictureModelX}
              alt="HNE Charger Model X"
              width={160}
              height={160}
              marginLeft={"calc(60% - 160px)"}
              zIndex={3}
              borderRadius={"100%"}
              boxShadow={4}
              border={10}
              borderColor={theme.palette.primary.light}
              data-aos={"fade-up"}
              sx={{
                objectFit: "cover",
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.5)" : "none",
              }}
            />
            <Box
              component={Image}
              width={200}
              height={200}
              src={pictureAppUsage}
              alt="HNE Futures Charging App usage for Smart Charger control"
              marginTop={"-8%"}
              zIndex={2}
              border={10}
              borderColor={theme.palette.primary.light}
              borderRadius={"100%"}
              boxShadow={4}
              data-aos={"fade-up"}
              sx={{
                objectFit: "cover",
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.5)" : "none",
              }}
            />
            <Box
              component={Image}
              width={300}
              height={300}
              src={pictureOrangeCar}
              alt="Electric Car charging with HNE Futures Smart Charger Model Y"
              marginTop={"-20%"}
              marginLeft={"calc(100% - 300px)"}
              zIndex={1}
              border={10}
              borderColor={theme.palette.primary.light}
              borderRadius={"100%"}
              boxShadow={4}
              data-aos={"fade-up"}
              sx={{
                objectFit: "cover",
                filter:
                  theme.palette.mode === "dark" ? "brightness(0.5)" : "none",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
