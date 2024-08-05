import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import SettingsRemoteIcon from "@mui/icons-material/SettingsRemote";

const Highlights = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"secondary"}
          align={"center"}
        >
          Electric Vehicle Charging Solutions
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={"h3"}
          gutterBottom
          align={"center"}
        >
          Reasons to buy our Smart Chargers
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: "Convenience",
            subtitle:
              "Enjoy the convenience of charging at home without relying on the availability of a public charger.",
            icon: <EvStationOutlinedIcon />,
          },
          {
            title: "Cost Savings",
            subtitle:
              "Owning a charger at home allows you to significantly save on maintanence and fuel costs.",
            icon: <SavingsOutlinedIcon />,
          },
          {
            title: "Remote Charging",
            subtitle: "Seamless charging experience with our Charging App.",
            icon: <SettingsRemoteIcon />,
          },
          {
            title: "Environmental Impact",
            subtitle:
              "With every charger installed, together we bring our planet towards the future without fossil fuels.",
            icon: <EnergySavingsLeafOutlinedIcon />,
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box width={1} height={"100%"} data-aos={"fade-up"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={"h6"}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={"center"}
                >
                  {item.title}
                </Typography>
                <Typography align={"center"} color="textSecondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Highlights;
