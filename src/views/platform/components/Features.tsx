import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, colors } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Features = () => {
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
          Our Platform
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={"h3"}
          align={"center"}
        >
          Unlock the potential of Data
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            title: "Efficient Management",
            subtitle:
              "We help your business gain leverage and efficiency through automated management of your charging infrastructure.",
            icon: <SettingsIcon />,
            color: colors.teal,
          },
          {
            title: "Energy Optimisation",
            subtitle:
              "Our centralised platform provides predictive charging scheduling and energy allocation.",
            icon: <EnergySavingsLeafIcon />,
            color: colors.pink,
          },
          {
            title: "Fleet Optimisation",
            subtitle:
              "Optimise and energy consumption of your Electric Vehicles fleet. More lifetime, less maintenance.",
            icon: <ElectricCarIcon />,
            color: colors.amber,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              display={"block"}
              width={"100%"}
              height={"100%"}
              sx={{
                textDecoration: "none",
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={"100%"}
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                data-aos={"fade-up"}
                borderRadius={3}
              >
                <Box component={CardContent} padding={4}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Box
                      component={Avatar}
                      variant="rounded"
                      width={60}
                      height={60}
                      marginBottom={2}
                      bgcolor={item.color[50]}
                      color={item.color[500]}
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
                <Box flexGrow={1} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
