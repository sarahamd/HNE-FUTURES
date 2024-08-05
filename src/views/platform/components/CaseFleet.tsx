import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import TuneIcon from "@mui/icons-material/Tune";
import BatterySaverIcon from "@mui/icons-material/BatterySaver";
import TaxiAlertIcon from "@mui/icons-material/TaxiAlert";

const CaseFleet = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? "row" : "column-reverse"}>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <Box component={Card} boxShadow={4} height={"100%"} width={"100%"}>
            <Box
              component={CardMedia}
              height={"100%"}
              width={"100%"}
              minHeight={300}
              image="/other/garage.webp"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} data-aos={"fade-up"}>
          <Box marginBottom={4}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "medium",
              }}
              gutterBottom
              color={"secondary"}
            >
              Business Case
            </Typography>
            <Box
              component={Typography}
              fontWeight={700}
              variant={"h4"}
              gutterBottom
            >
              Electric Car{" "}
              <Typography color="primary" variant="inherit" component="span">
                Fleet Owners
              </Typography>{" "}
            </Box>
            <Typography variant={"h6"} component={"p"} color={"textSecondary"}>
              HNE Futures Platform offers a turnkey solution to support Real
              Estate Developers in planning and operations.
            </Typography>
          </Box>
          <List disablePadding>
            {[
              {
                icon: <TuneIcon />,
                title: "Integrated Control",
                subtitle:
                  "HNE Platform integrates smoothly with your EV fleet to provide enhanced visibility and control of your assets.",
              },
              {
                icon: <BatterySaverIcon />,
                title: "Longer battery life",
                subtitle:
                  "HNE Platform tracks battery health of your vehicles and adapts charging to ensure optimal battery utilisation and lifetime.",
              },
              {
                icon: <TaxiAlertIcon />,
                title: "Automated notifications",
                subtitle:
                  "Your operations team receives timely automated notifications when your fleet or infrastructure needs attention or maintenance.",
              },
            ].map((item, index) => (
              <ListItem key={index} disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Box
                    component={Avatar}
                    variant={"rounded"}
                    color={theme.palette.primary.dark}
                    bgcolor={`${theme.palette.primary.light}22`}
                  >
                    {item.icon}
                  </Box>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.subtitle} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CaseFleet;
