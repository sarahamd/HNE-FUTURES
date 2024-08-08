import {
  Avatar,
  CardMedia,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import modelXPicture from "public/chargers/model-x.webp";
import modelYPicture from "public/chargers/model-y.webp";
import modelnewYPicture from "public/chargers/new Model-Y.webp"

const ChargerComparison = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={"h2"}
          align={"center"}
          gutterBottom
        >
          Smart Electric Vehicle Chargers
        </Box>
        <Typography
          variant={"h6"}
          component={"p"}
          color={"textSecondary"}
          align={"center"}
        >
          All models are suitable for residential, commercial and industrial
          installations.
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent={"center"}>
        {[
          {
            title: "Model X",
            picture: modelXPicture,
            price: "12500",
            features: [
              {
                title: "Wall Mounted",
              },
              {
                title: "Easy Installation",
              },
              {
                title: "Status Screen",
              },
              {
                title: "WiFi / RFID",
              },
              {
                title: "White & Black",
              },
             
             
            ],
            specificationsLink: "/specs/TechSpec-ModelX.pdf",
          },
          {
            title: "Model Y",
            picture: modelYPicture,
            price: "13500",
            features: [
              {
                title: "Wall Mounted",
              },
              {
                title: "Easy Installation",
              },
              {
                title: "Status Screen",
              },
              {
                title: "WiFi / RFID",
              },
              {
                title: "White & Black",
              },
              {
                title: "Tethered Cable",
              },
            ],
            specificationsLink: "/specs/TechSpec-ModelY.pdf",
          },
          {
            title: "Model X 2",
            picture: modelXPicture,
            price: "12500",
            features: [
              {
                title: "Wall Mounted",
              },
              {
                title: "Easy Installation",
              },
              {
                title: "Status Screen",
              },
              {
                title: "WiFi / 4G",
              },
              {
                title: "White & Black",
              },
              {
                title: "RFID Authentication",
              },
              {
                title: "EML Lock (optional)",
              },
              {
                title: "App Usage",
              },
              {
                title: "Smart Charging",
              },
              {
                title: "AC Charger",
              },
            ],
            specificationsLink: "/specs/TechSpec-ModelX.pdf",
          },
          {
            title: "Model Y 2",
            picture: modelnewYPicture,
            price: "13500",
            features: [
              {
                title: "Portable Charger",
              },
              
              {
                title: "Status Screen",
              },
             
              {
                title: "White & Black",
              },
              {
                title: "Wifi",
              },
              {
                title: "Meter Values",
              },
              {
                title: "Tethered Cable",
              },
              {
                title: "App Usage",
              },
              {
                title: "Smart Charging",
              },
              {
                title: "AC Charger",
              },
            ],
            specificationsLink: "/specs/TechSpec-ModelY.pdf",
          },
        ].map((item, i) => (
          <Grid item xs={12} md={5} key={i} data-aos="fade-up">
            <Box
              component={Card}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              boxShadow={0}
              border={`1px solid ${theme.palette.divider}`}
              borderRadius={4}
            >
              <CardMedia
                component="img"
                title={item.title}
                alt={item.title}
                height={400}
                image={item.picture.src}
                sx={{ objectFit: "contain" }}
              />
              <Box component={CardContent} padding={4}>
                <Box
                  marginBottom={4}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Box display={"flex"} alignItems={"flex-start"}>
                    <Typography
                      variant={"h2"}
                      color={"textPrimary"}
                      gutterBottom
                    >
                      <Box component={"span"} fontWeight={700}>
                        {item.title}
                      </Box>
                    </Typography>
                  </Box>
                </Box>
                <Grid container spacing={1}>
                  {item.features.map((feature, j) => (
                    <Grid item xs={12} key={j}>
                      <Box
                        component={ListItem}
                        disableGutters
                        width={"auto"}
                        padding={0}
                      >
                        
                        <Box
                          component={ListItemAvatar}
                          minWidth={"auto !important"}
                          marginRight={2}
                        >
                          <Box
                            component={Avatar}
                            bgcolor={theme.palette.secondary.main}
                            width={20}
                            height={20}
                          >
                            <svg
                              width={12}
                              height={12}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Box>
                        </Box>
                        <ListItemText primary={feature.title} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box flexGrow={1} />
              <Box component={CardActions} justifyContent={"center"}>
                <Button
                  size="medium"
                  variant="contained"
                  component={Link}
                  href="/contact"
                >
                  Contact Us
                </Button>
              </Box>
              <Box
                component={CardActions}
                justifyContent={"center"}
                paddingBottom={4}
              >
                <Button
                  size="small"
                  variant="text"
                  component="a"
                  href={item.specificationsLink}
                  target="_blank"
                >
                  Download Technical Specifications
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChargerComparison;
