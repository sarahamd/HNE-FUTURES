import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { callToAction, mainNavigation } from "./navigation";
import { default as NextLink } from "next/link";

interface Props {
  onClose: () => void;
}

const SidebarNav = ({ onClose }: Props) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : "");
  }, []);

  const navigation = [
    {
      title: "Home",
      href: "/",
    },
    ...mainNavigation,
  ];

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        onClick={() => onClose()}
      >
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box paddingX={2} paddingBottom={2}>
        <Box>
          <Box marginBottom={4}>
            <Grid container spacing={1}>
              {navigation.map((el, i) => (
                <Grid item xs={6} key={i}>
                  <NextLink href={el.href} legacyBehavior>
                    <Link
                      variant="body2"
                      component={"a"}
                      href={el.href}
                      color={activeLink === el.href ? "primary" : "textPrimary"}
                      underline="none"
                      sx={{
                        fontWeight: activeLink === el.href ? 600 : 400,
                        "&:hover": {
                          textDecoration: "none",
                          color: theme.palette.primary.dark,
                        },
                      }}
                      onClick={() => onClose()}
                    >
                      {el.title}
                    </Link>
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box marginTop={1}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={NextLink}
            href={callToAction.href}
          >
            {callToAction.title}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
