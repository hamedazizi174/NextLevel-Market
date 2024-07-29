import { Divider, Paper, Typography } from "@mui/material";
import MenuList from "../MenuList/MenuList";
import { pageLocalization } from "@/constant/localization";

export default function SideBar() {
  return (
    <Paper elevation={6} sx={{ height: "600px" }}>
      <Typography variant="h5" p={3}>
        {pageLocalization.admin.adminَAccess}
      </Typography>
      <Divider />
      <MenuList />
    </Paper>
  );
}
