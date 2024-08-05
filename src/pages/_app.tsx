import "aos/dist/aos.css";
import type { AppProps } from "next/app";

import { initialiseGtm } from "@/common/gtm";
import { useEffect } from "react";
import { getCookieConsentValue } from "react-cookie-consent";

export default function App({ Component, pageProps }: AppProps) {
  const hasCookieConsent = getCookieConsentValue() === "true";

  useEffect(() => {
    if (hasCookieConsent) {
      initialiseGtm();
    }
  }, [hasCookieConsent]);

  return <Component {...pageProps} />;
}
