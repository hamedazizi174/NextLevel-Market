import { useGetAllProducts } from "@/api/products/products.queries";
import { pageLocalization } from "@/constant/localization";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TableHeadRow from "./TableHeadRows/TableHeadRow";
import TableBodyRows from "./TableBodyRows/TableBodyRows";
import PaginationCom from "@/components/shared/Pagination/Pagination";
import EditPriceQuantity from "./EditPriceQuantity/EditPriceQuantity";

export default function Inventory() {
  const [page, setPage] = useState(1);
  const { data: allProducts } = useGetAllProducts(page, "");

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      height="550px"
      p={2}
      position="relative"
    >
      <EditPriceQuantity />
      <Typography variant="h5" fontWeight={900}>
        {pageLocalization.admin.priceQuantityTable}
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
        <Table aria-label="price & quantity table" stickyHeader>
          <TableHead>
            <TableHeadRow />
          </TableHead>
          <TableBody>
            <TableBodyRows allProducts={allProducts?.data.products} />
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationCom page={page} setPage={setPage} items={allProducts} />
    </Stack>
  );
}
