import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
} from "@mui/material";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import SideDrawer from "./SideDrawer/SideDrawer";
import { localization } from "@/constant/localization";
import { useLogout } from "@/api/auth/auth.queries";

export default function Header() {
  const { mutate: logoutMutate } = useLogout();

  const logout = () => logoutMutate();

  return (
    <Paper elevation={6}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p="10px"
      >
        <SideDrawer />
        <Image src="/logo.jpeg" alt="logo" width={144} height={60} />
        <List sx={{ display: "flex" }}>
          <ListItem sx={{ px: "0" }}>
            <ListItemButton onClick={logout}>
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
    </Paper>
  );
}
