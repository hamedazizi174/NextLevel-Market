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
import LogoutIcon from "@mui/icons-material/Logout";
import { ROUTES } from "@/constant/routes";
import { useEffect, useState } from "react";
import { TOKENS } from "@/constant/general";
import Link from "next/link";
import { useLogout } from "@/api/auth/auth.queries";

export default function Header() {
  const [user, setUser] = useState<string | null>("");
  const { mutate: logoutMutate } = useLogout();

  const logout = () => logoutMutate();

  useEffect(() => {
    setUser(localStorage.getItem(TOKENS.ACCESS));
  });

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p="10px"
    >
      <Link href={ROUTES.HOME}>
        <Image src="/logo.jpeg" alt="logo" width={144} height={60} />
      </Link>
      <List sx={{ display: "flex" }}>
        {user ? (
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
