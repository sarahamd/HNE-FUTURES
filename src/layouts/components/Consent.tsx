import { initialiseGtm } from "@/common/gtm";
import { Box, Button } from "@mui/material";
import CookieConsent from "react-cookie-consent";

const onAccept = () => {
  initialiseGtm();
};

const Consent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I understand"
      declineButtonText="Reject"
      ButtonComponent={Button}
      customButtonProps={{
        variant: "contained",
        sx: { marginRight: 5 },
      }}
      customDeclineButtonProps={{
        variant: "text",
        sx: { color: "#fff", marginRight: 5 },
      }}
      onAccept={onAccept}
      disableButtonStyles
      enableDeclineButton
    >
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        display={"flex"}
      >
        We collect just a few cookies to enhance user experience and measure
        website functionality.
      </Box>
    </CookieConsent>
  );
};

export default Consent;
