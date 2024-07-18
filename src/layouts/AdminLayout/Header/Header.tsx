import { localization } from "@/constant/localization";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import Image from "next/image";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupsIcon from "@mui/icons-material/Groups";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Header() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p="10px"
    >
      <Image src="/logo.jpeg" alt="logo" width={144} height={60} />
      <List sx={{ display: "flex" }}>
        <ListItem>
          <ListItemButton LinkComponent={"a"} href="#">
            <ListItemIcon sx={{ minWidth: 30 }}>
              <LoginIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={localization.logOut}
              sx={{ textWrap: "nowrap" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
}
