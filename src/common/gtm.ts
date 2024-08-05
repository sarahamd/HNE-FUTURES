import TagManager from "react-gtm-module";

const initializeGtm = () => {
  TagManager.initialize({
    gtmId: process.env.NEXT_PUBLIC_GTM_ID!,
  });
};

export { initializeGtm as initialiseGtm };
