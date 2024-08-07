import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Contact = () => {
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
        >
          Contact us
        </Typography>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
            }}
          >
            Get in touch
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={"textSecondary"}>
            We would love to talk about how we can help you.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant={"h6"} gutterBottom sx={{ fontWeight: "medium" }}>
            United Kingdom:
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText
                primary="Unit 21, Falconet Court, 123 Wapping High Street"
                secondary="London, E1W 3NX"
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="info@hnefutures.com" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="+44 7984117272" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <WhatsAppIcon />
              </ListItemIcon>
              <ListItemText primary="+44 7984117272" secondary="WhatsApp" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"h6"} gutterBottom sx={{ fontWeight: "medium" }}>
            Egypt:
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText
                primary="Fabrihub 690"
                secondary=" New Cairo 3, Cairo Governorate 4716011"
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="info@hnefutures.com" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="+20 1128289257" />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <WhatsAppIcon />
              </ListItemIcon>
              <ListItemText primary="+20 1128289257" secondary="WhatsApp" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
