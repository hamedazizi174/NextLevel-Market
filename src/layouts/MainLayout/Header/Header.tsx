import { Link, List, ListItem, Stack } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: { md: 20, xs: 1 },
        px: { md: 5, xs: 2 },
        py: { md: 2, xs: 1 },
      }}
    >
      <Image src="/shop.png" alt="shop" width={144} height={60} />
      <List sx={{ display: "flex", gap: 1 }}>
        <ListItem sx={{ cursor: "pointer" }}>
          <Link>Login</Link>
        </ListItem>
        <ListItem sx={{ cursor: "pointer" }}>
          <Link>Cart</Link>
        </ListItem>
        <ListItem sx={{ cursor: "pointer" }}>
          <Link>About</Link>
        </ListItem>
      </List>
    </Stack>
  );
}
