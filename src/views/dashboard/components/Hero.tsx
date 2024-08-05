import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import dashboardOverviewPicture from "public/dashboard/dashboard 4.webp";


const DashboardHero = () => {
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
          Comprehensive Dashboard for Your Charging Stations
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography variant="h6" align={"center"} color={"textSecondary"}>
        Efficiently Oversee and Optimize Your Entire EV Charging Network With Ease.</Typography>
        {/* <Typography variant="h6" align={"center"} color={"textSecondary"}>
          Monitor and manage all aspects of your EV charging infrastructure
        </Typography> */}
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
                src={dashboardOverviewPicture}
                alt="HNE Dashboard Overview"
                height={isMd ? 400 : 200}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHero;