import { Box, Divider, Drawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MenuList from "../../MenuList/MenuList";
import { pageLocalization } from "@/constant/localization";

export default function SideDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ display: { md: "none" } }}>
      <MenuIcon
        sx={{ width: "40px", pt: "10px" }}
        fontSize="large"
        color="primary"
        onClick={toggleDrawer(true)}
      />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Typography variant="h5" p={3}>
          {pageLocalization.admin.adminَAccess}
        </Typography>
        <Divider />
        <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
          <MenuList />
        </Box>
      </Drawer>
    </Box>
  );
}
