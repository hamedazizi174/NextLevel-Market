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
import { ROUTES } from "@/constant/routes";
import { useEffect, useState } from "react";
import { TOKENS } from "@/constant/general";

export default function Header() {
  const [user, setUser] = useState<string | null>("");
  useEffect(() => {
    setUser(localStorage.getItem(TOKENS.ACCESS));
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p="10px"
    >
      <Image src="/logo.jpeg" alt="logo" width={144} height={60} />
      <List sx={{ display: "flex" }}>
        {user ? (
          <ListItem>
            <ListItemText
              primary={localization.hi}
              sx={{ textWrap: "nowrap" }}
            />
          </ListItem>
        ) : (
          <ListItem>
            <ListItemButton LinkComponent={"a"} href={ROUTES.SIGNIN}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <LoginIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={localization.signInSignUp}
                sx={{ textWrap: "nowrap" }}
              />
            </ListItemButton>
          </ListItem>
        )}

        <ListItem>
          <ListItemButton LinkComponent={"a"} href={ROUTES.CART}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <ShoppingCartIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={localization.cart}
              sx={{ textWrap: "nowrap" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton LinkComponent={"a"} href="#">
            <ListItemIcon sx={{ minWidth: 30 }}>
              <FavoriteIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={localization.wishlist}
              sx={{ textWrap: "nowrap" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton LinkComponent={"a"} href="#">
            <ListItemIcon sx={{ minWidth: 30 }}>
              <GroupsIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={localization.aboutUs}
              sx={{ textWrap: "nowrap" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
}
