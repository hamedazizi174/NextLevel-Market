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

export default function MenuList() {
  const router = useRouter();
  return (
    <List>
      {adminAccessList.map((item, index) => (
        <ListItem key={index}>
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
