import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import pictureAppleStore from "public/logos/store-apple.webp";
import pictureGoogleStore from "public/logos/store-google.webp";

import { APP_LINK_APPLE, APP_LINK_GOOGLE } from "@/constants";
import appListPicture from "public/app/app-list.png";

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          align={"center"}
          sx={{
            fontWeight: 700,
          }}
        >
          Stay connected in the E-mobility world
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography variant="h6" align={"center"} color={"textSecondary"}>
          Get HNE Charging App to control your own charger and find other
          charging stations around you
        </Typography>
      </Box>
      <Box
        marginBottom={{ xs: 4, sm: 6, md: 8 }}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={"center"}
        alignItems="center"
      >
        <Box component={"a"} href={APP_LINK_GOOGLE} target="_blank">
          <Image
            alt="HNE Futures Application in Google Play"
            src={pictureGoogleStore}
            height={60}
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
            alt="HNE Futures Application in Apple AppStore"
            src={pictureAppleStore}
            height={60}
          />
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"baseline"} justifyContent={"center"}>
        <Box
          component={Card}
          maxWidth={1000}
          boxShadow={3}
          border={`1px solid ${theme.palette.divider}`}
          borderRadius={3}
        >
          <Box component={CardContent}>
            <Box>
              <Image
                src={appListPicture}
                alt="HNE Futures Charging Application for smart EV chargers"
                height={isMd ? 400 : 200}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
