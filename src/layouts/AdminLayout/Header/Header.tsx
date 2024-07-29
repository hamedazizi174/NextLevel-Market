import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import SideDrawer from "./SideDrawer/SideDrawer";
import { localization } from "@/constant/localization";
import { theme } from "@/theme/nexxsic";

export default function Header() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p="10px"
      bgcolor="#dafffc"
    >
      <SideDrawer />
      <Image src="/logo.jpeg" alt="logo" width={144} height={60} />
      <List sx={{ display: "flex" }}>
        <ListItem sx={{ px: "0" }}>
          <ListItemButton LinkComponent={"a"} href="#">
            <ListItemIcon sx={{ minWidth: { xs: "20px", md: "30px" } }}>
              <LogoutIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={localization.logOut}
              sx={{ display: { xs: "none", md: "block" } }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
}
