import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import { ROUTES } from "@/constant/routes";
import { adminAccessList } from "../adminAccessList";
import { useSearchParams } from "next/navigation";
import { theme } from "@/theme/nexxsic";

export default function MenuList() {
  const router = useRouter();
  const searchParams = useSearchParams().get("view");

  return (
    <List>
      {adminAccessList.map((item, index) => (
        <ListItem
          key={index}
          sx={{
            bgcolor:
              searchParams === item.view ? theme.palette.secondary.light : "",
          }}
        >
          <ListItemButton
            onClick={() => router.push(`${ROUTES.ADMIN}?view=${item.view}`)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
