import { pageLocalization } from "@/constant/localization";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function MenuList() {
  return (
    <List>
      <ListItem>
        <ListItemButton LinkComponent={"a"} href="#">
          <ListItemIcon>
            <ShoppingCartIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={pageLocalization.admin.allProducts} />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton LinkComponent={"a"} href="#">
          <ListItemIcon>
            <InventoryIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={pageLocalization.admin.inventory} />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton LinkComponent={"a"} href="#">
          <ListItemIcon>
            <ShoppingBasketIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={pageLocalization.admin.orders} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
