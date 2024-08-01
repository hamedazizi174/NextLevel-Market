import { pageLocalization } from "../../constant/localization";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export const adminAccessList = [
  {
    name: pageLocalization.admin.allProducts,
    view: "all-products",
    icon: <ShoppingCartIcon color="primary" />,
  },
  {
    name: pageLocalization.admin.inventory,
    view: "inventory",
    icon: <InventoryIcon color="primary" />,
  },
  {
    name: pageLocalization.admin.orders,
    view: "orders",
    icon: <ShoppingBasketIcon color="primary" />,
  },
];
