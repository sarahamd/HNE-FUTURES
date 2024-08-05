import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SidebarNav from "./SidebarNav";

interface Props {
  open: boolean;
  onClose: () => void;
}

const Sidebar = (props: Props) => {
  const { open, onClose, ...rest } = props;

  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant="temporary"
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: { xs: "100%", sm: 400 },
        },
      }}
    >
      <Box
        {...rest}
        sx={{
          height: "100%",
          padding: 1,
        }}
      >
        <SidebarNav onClose={onClose} />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
