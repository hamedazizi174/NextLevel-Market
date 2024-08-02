import { useGetAllProducts } from "@/api/products/products.queries";
import { pageLocalization } from "@/constant/localization";
import {
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TableBodyRows from "./TableBodyRows/TableBodyRows";
import TableHeadRow from "./TableHeadRows/TableHeadRow";
import AddProduct from "./AddProduct/AddProduct";

export default function AllProducts() {
  const [page, setPage] = useState(1);
  const { data: allProducts } = useGetAllProducts(page);

  function changePage(event: React.ChangeEvent<unknown>, newPage: number) {
    console.log(allProducts.data.products);
    setPage(newPage);
  }

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      height="550px"
      p={2}
      position="relative"
    >
      <AddProduct />
      <Typography variant="h5" fontWeight={900}>
        {pageLocalization.admin.productsTable}
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
        <Table aria-label="all products table" stickyHeader>
          <TableHead>
            <TableHeadRow />
          </TableHead>
          <TableBody>
            <TableBodyRows allProducts={allProducts?.data.products} />
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={allProducts?.total_pages}
        page={page}
        color="secondary"
        onChange={changePage}
      />
    </Stack>
  );
}
