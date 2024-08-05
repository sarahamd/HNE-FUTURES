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
import officeSvg from "public/dashboard/At the office-amico.webp"; // Adjust the import path as needed
import { Button } from "@mui/material";

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item container alignItems={"center"} xs={12} md={6}>
          <Box data-aos={"fade-up"}>
            <Box marginBottom={2}>
              <Typography variant={"h4"} sx={{ fontWeight: 700 }} gutterBottom>
              Streamline And Elevate Your Charging Station Management
                {/* Elevate Your Charging Management Experience */}
                {/* Transform and Supercharge Your Charging Station Operations */}
              </Typography>
              <Typography variant={"h6"} component={"p"} color="textSecondary">
                {/* <Box component={"span"} fontWeight={400}>
                  Discover How Our Advanced Dashboard Helps You Manage Charging
                  Stations, Monitor Performance In Real-Time, And Optimize
                  Operations For Peak Efficiency And Growth.
                </Box> */}
                <Box component={"span"} fontWeight={400}>
                  Our Advanced Dashboard Helps You Efficiently Manage Your Charging Stations, Track Performance, And Optimize Operations.
                </Box>

                {/* <Box component={"span"} fontWeight={400}>
                        Our State-Of-The-Art Dashboard Empowers You To Take Full Control Of Your Charging Network. Track Key Metrics, Monitor Performance, And Optimize Every Aspect Of Your Charging Operations With Ease.
                        Experience Enhanced Efficiency And Insight With A Dashboard Designed For Proactive Management And Seamless Operation.
                        </Box> */}
              </Typography>
              <br />
              <Button variant="outlined" size="large" href="ChargingDashboard">
              Charging Dashboard
              </Button>
            </Box>
            {/* <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "flex-start" }}
            >
              <Box component={"a"} href={APP_LINK_GOOGLE} target="_blank">
                <Image
                  alt="Download on Google Play"
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
                  alt="Download on the App Store"
                  src={pictureAppleStore}
                  height={44}
                />
              </Box>
            </Box> */}
          </Box>
        </Grid>

        <Grid item container xs={12} md={6} justifyContent="center">
          <Box sx={{ position: "relative", width: "100%", height: 500 }}>
            <Image
              src={officeSvg}
              alt="Office Illustration"
              fill
              //   objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
