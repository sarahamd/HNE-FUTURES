import { CardMedia } from "@mui/material";
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

const Chargers = () => {
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
          Our Products
        </Typography>
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
            description:
              "Slick new design, slim frame and easy to mount to your wall in no time.",
            fadeEffect: "fade-up",
          },
          {
            title: "Model Y",
            picture: modelYPicture,
            description:
              "Start charging your EV car in style almost instantly by easily using embedded cable.",
            fadeEffect: "fade-up",
          },
          {
            title: "Model X",
            picture: modelXPicture,
            description:
              "Slick new design, slim frame and easy to mount to your wall in no time.",
            fadeEffect: "fade-up",
          },
          {
            title: "Model Y",
            picture: modelYPicture,
            description:
              "Start charging your EV car in style almost instantly by easily using embedded cable.",
            fadeEffect: "fade-up",
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={5} key={i} data-aos={item.fadeEffect}>
            <Box
              component={Link}
              href={"/smart-chargers"}
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
                borderRadius={3}
                display={"flex"}
                flexDirection={"column"}
              >
                <CardMedia
                  component="img"
                  title={item.title}
                  alt={item.title}
                  height={400}
                  image={item.picture.src}
                  sx={{ objectFit: "contain" }}
                />
                <Box
                  component={CardContent}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography
                    variant={"h3"}
                    color={"textPrimary"}
                    gutterBottom
                    fontWeight={700}
                  >
                    {item.title}
                  </Typography>
                  <Typography align={"left"} color="textSecondary">
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={"left"}>
                  <Button
                    size="large"
                    endIcon={
                      <svg
                        width={16}
                        height={16}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    }
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Chargers;
