import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { default as NextLink } from "next/link";
import logoHNE from "../../../public/logo-new.png";
import pictureGoogleStore from "public/logos/store-google.webp";
import pictureAppleStore from "public/logos/store-apple.webp";
import { mainNavigation, callToAction } from "./navigation";
import { APP_LINK_APPLE, APP_LINK_GOOGLE } from "@/constants";

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box
          display={"flex"}
          component="a"
          href="/"
          title="HNE Futures"
          height={36}
        >
          <Image src={logoHNE} alt="HNE Futures" height={36} />
        </Box>
        <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
          <Box component={"a"} href={APP_LINK_GOOGLE} target="_blank">
            <Image
              alt="HNE Futures Application in Google Store"
              src={pictureGoogleStore}
              height={36}
            />
          </Box>
          <Box
            component={"a"}
            href={APP_LINK_APPLE}
            target="_blank"
            marginLeft={2}
          >
            <Image
              alt="HNE Futures Application in AppStore"
              src={pictureAppleStore}
              height={36}
            />
          </Box>
        </Box>
        <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
          {mainNavigation.map((el, i) => {
            return (
              <Box marginRight={3} key={i}>
                <NextLink href={el.href} legacyBehavior>
                  <Link
                    underline="none"
                    component="a"
                    href={el.href}
                    color="textPrimary"
                    variant={"subtitle2"}
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
              size="small"
            >
              {callToAction.title}
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Typography
        align={"center"}
        variant={"subtitle2"}
        color="textSecondary"
        gutterBottom
      >
        &copy; 2023, HNE Renewables Ltd. All rights reserved. Registered Company
        in England and Wales No.10877289
      </Typography>
    </Grid>
  </Grid>
);

export default Footer;
