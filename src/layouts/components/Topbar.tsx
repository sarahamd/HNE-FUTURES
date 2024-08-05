import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Image from "next/image";
import { default as NextLink } from "next/link";
import { useEffect, useState } from "react";
import logoPicture from "../../../public/logo-new-text.png";
import { callToAction, mainNavigation } from "./navigation";

interface Props {
  onSidebarOpen: () => void;
}

const Topbar = ({ onSidebarOpen }: Props) => {
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : "");
  }, []);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Box
          marginRight={{ xs: 1, sm: 2 }}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <IconButton onClick={onSidebarOpen} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          display={"flex"}
          alignItems="center"
          component={NextLink}
          href="/"
          title="HNE Futures"
          height={64}
        >
          <Image src={logoPicture} alt="HNE Futures" height={64} />
        </Box>
      </Box>
      <Box display="flex" alignItems={"center"}>
        <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
          {mainNavigation.map((el, i) => {
            return (
              <Box marginRight={{ xs: 2, sm: 5 }} key={i}>
                <NextLink href={el.href} legacyBehavior>
                  <Link
                    underline="none"
                    component="a"
                    href={el.href}
                    color={activeLink === el.href ? "primary" : "textPrimary"}
                    sx={{
                      fontWeight: activeLink === el.href ? 600 : 400,
                      "&:hover": {
                        textDecoration: "none",
                        color: theme.palette.primary.dark,
                      },
                    }}
                  >
                    {el.title}
                  </Link>
                </NextLink>
              </Box>
            );
          })}
          <Box>
            <Button
              variant="contained"
              color="primary"
              component={NextLink}
              href={callToAction.href}
              size="large"
            >
              {callToAction.title}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
