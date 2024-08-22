import { localization } from "@/constant/localization";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  TextField,
} from "@mui/material";
import Image from "next/image";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupsIcon from "@mui/icons-material/Groups";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
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
      gap="20px"
    >
      <Link href={ROUTES.HOME}>
        <Image src="/logo.jpeg" alt="logo" width={134} height={50} />
      </Link>
      <TextField
        type="search"
        label={localization.search}
        variant="filled"
        size="small"
        InputProps={{
          endAdornment: <SearchIcon color="primary" />,
          sx: { borderRadius: "15px" },
          disableUnderline: true,
        }}
        sx={{ maxWidth: "50%" }}
        fullWidth
      />
      <List sx={{ display: "flex" }} disablePadding>
        {user ? (
          <ListItem sx={{ px: "0" }} disablePadding>
            <ListItemButton onClick={logout}>
              <ListItemIcon sx={{ minWidth: { xs: "20px", md: "30px" } }}>
                <LogoutIcon color="primary" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton LinkComponent={"a"} href={ROUTES.SIGNIN}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <LoginIcon color="primary" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        )}
        <ListItem disablePadding>
          <ListItemButton LinkComponent={"a"} href={ROUTES.CART}>
            <ListItemIcon sx={{ minWidth: 30 }}>
              <ShoppingCartIcon color="primary" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent={"a"} href="#">
            <ListItemIcon sx={{ minWidth: 30 }}>
              <FavoriteIcon color="primary" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent={"a"} href="#">
            <ListItemIcon sx={{ minWidth: 30 }}>
              <GroupsIcon color="primary" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
}
