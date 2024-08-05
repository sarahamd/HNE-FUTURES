import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const CtaSection = () => (
  <Box
    display={"flex"}
    justifyContent={"space-between"}
    alignItems={{ xs: "flex-start", sm: "center" }}
    flexDirection={{ xs: "column", sm: "row" }}
  >
    <Box>
      <Typography fontWeight={700} variant={"h6"} gutterBottom>
        Contact us today
      </Typography>
      <Typography>Free consultation for your enterprise</Typography>
    </Box>
    <Box marginTop={{ xs: 2, sm: 0 }}>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        href="/contact"
        size="large"
      >
        Get Free Consultation
      </Button>
    </Box>
  </Box>
);

export default CtaSection;
