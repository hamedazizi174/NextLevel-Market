import AllProducts from "@/components/admin/AllProducts/AllProducts";
import Inventory from "@/components/admin/Inventory/Inventory";
import Orders from "@/components/admin/Orders/Orders";
import Welcome from "@/components/admin/Welcome/Welcome";
import { adminAccessList } from "@/layouts/AdminLayout/adminAccessList";
import { theme } from "@/theme/nexxsic";
import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function AdminTemplate() {
  const searchParams = useSearchParams().get("view");
  return (
    <Box borderRadius={10} height={550} m={3} p={1} overflow-x="scroll">
      {!searchParams && <Welcome />}
      {searchParams === adminAccessList[0].view && <AllProducts />}
      {searchParams === adminAccessList[1].view && <Inventory />}
      {searchParams === adminAccessList[2].view && <Orders />}
    </Box>
  );
}
