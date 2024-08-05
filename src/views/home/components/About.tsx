import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={{ xs: 4, sm: 8, md: 12 }}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"secondary"}
          align={"center"}
        >
          About Us
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={"h3"}
          align={"center"}
          gutterBottom
        >
          Our Future Starts Today
        </Box>
        <Box>
          <Typography
            variant={"h6"}
            component={"p"}
            color={"textSecondary"}
            align={"center"}
          >
            HNE Futures is a Cleantech company that develops, manufactures,
            installs and maintains E-Mobility Solutions amplified by its own
            developed Software Platform. Today, we are operating in UK and Egypt
            and aim to expand in the MENA Region and Africa soon.
          </Typography>
        </Box>
        <Box marginTop={3} display={"flex"} justifyContent={"center"}>
          <Button
            component={Link}
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
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
            Contact us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
