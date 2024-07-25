import { pageLocalization } from "@/constant/localization";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";

export default function SideBar() {
  return (
    <Paper elevation={6} sx={{ height: "600px", bgcolor: "lightblue" }}>
      <List>
        <ListItem>
          <ListItemButton LinkComponent={"a"} href="#">
            <ListItemText primary={pageLocalization.admin.allProducts} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton LinkComponent={"a"} href="#">
            <ListItemText primary={pageLocalization.admin.inventory} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton LinkComponent={"a"} href="#">
            <ListItemText primary={pageLocalization.admin.orders} />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
}
