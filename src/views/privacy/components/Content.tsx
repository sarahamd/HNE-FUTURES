import { Link, List, ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Content = () => {
  const COMPANY = "HNE Futures";
  const APP = "HNE Charging";

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography variant={"h6"}>General Information</Typography>
        <Typography component={"p"} color={"textSecondary"}>
          {COMPANY} offers {APP} as a free to use mobile application. This
          SERVICE is provided by {COMPANY} at no cost and is intended for use as
          is. This page is used to inform visitors regarding our policies with
          the collection, use, and disclosure of Personal Information if anyone
          decided to use our Service. If you choose to use our Service, then you
          agree to the collection and use of information in relation to this
          policy. The Personal Information that we collect is used for providing
          and improving the Service. We will not use or share your information
          with anyone except as described in this Privacy Policy. The terms used
          in this Privacy Policy have the same meanings as in our Terms and
          Conditions, which are accessible at {COMPANY} unless otherwise defined
          in this Privacy Policy.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography variant={"h6"}>Information Collection and Use</Typography>
        <Typography component={"p"} color={"textSecondary"}>
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information. The
          information that we request will be retained by us and used as
          described in this privacy policy. The app does use third-party
          services that may collect information used to identify you. Link to
          the privacy policy of third-party service providers used by the app
        </Typography>
        <List>
          <ListItem>
            <Link
              href="https://www.google.com/policies/privacy/"
              target="_blank"
            >
              Google Play Services
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://firebase.google.com/policies/analytics"
              target="_blank"
            >
              Google Analytics for Firebase
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://firebase.google.com/support/privacy/"
              target="_blank"
            >
              Firebase Crashlytics
            </Link>
          </ListItem>
        </List>
      </Box>
      <Box marginBottom={4}>
        <Typography variant={"h6"}>Log Data</Typography>
        <Typography component={"p"} color={"textSecondary"}>
          We want to inform you that whenever you use our Service, in a case of
          an error in the app we collect data and information (through
          third-party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing our Service, the time and date of your use of
          the Service, and other statistics.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography variant={"h6"}>Cookies</Typography>
        <Typography component={"p"} color={"textSecondary"}>
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device&apos;s
          internal memory. This Service does not use these “cookies” explicitly.
          However, the app may use third-party code and libraries that use
          “cookies” to collect information and improve their services. You have
          the option to either accept or refuse these cookies and know when a
          cookie is being sent to your device. If you choose to refuse our
          cookies, you may not be able to use some portions of this Service.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography variant={"h6"}>Service Providers</Typography>
        <Typography component={"p"} color={"textSecondary"}>
          We may employ third-party companies and individuals due to the
          following reasons:
        </Typography>
        <List>
          <ListItem>
            <Typography color={"textSecondary"}>
              To facilitate our Service;
              
            </Typography>
          </ListItem>
          <ListItem>
            <Typography color={"textSecondary"}>
              To provide the Service on our behalf;
            </Typography>
          </ListItem>
          <ListItem>
            <Typography color={"textSecondary"}>
              To perform Service-related services; or
            </Typography>
          </ListItem>
          <ListItem>
            <Typography color={"textSecondary"}>
              To assist us in analyzing how our Service is used.
            </Typography>
          </ListItem>
        </List>
        <Typography component={"p"} color={"textSecondary"}>
          We want to inform users of this Service that these third parties have
          access to their Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography variant={"h6"}>Security</Typography>
        <Typography component={"p"} color={"textSecondary"}>
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography variant={"h6"}>Links to Other Sites</Typography>
        <Typography component={"p"} color={"textSecondary"}>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography variant={"h6"}>Children’s Privacy</Typography>
        <Typography component={"p"} color={"textSecondary"}>
          These Service do not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from children
          under 13 years of age. In the case we discover that a child under 13
          has provided us with personal information, we immediately delete this
          from our servers. If you are a parent or guardian and you are aware
          that your child has provided us with personal information, please
          contact us so that we will be able to do necessary actions.
        </Typography>
      </Box>
    </Box>
  );
};

export default Content;
