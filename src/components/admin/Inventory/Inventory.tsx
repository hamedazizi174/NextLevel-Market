import { useGetAllProducts } from "@/api/products/products.queries";
import { pageLocalization } from "@/constant/localization";
import {
  Button,
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
import TableHeadRow from "./TableHeadRows/TableHeadRow";
import TableBodyRows from "./TableBodyRows/TableBodyRows";

export default function Inventory() {
  const [page, setPage] = useState(1);
  const { data: allProducts } = useGetAllProducts(page);

  function changePage(event: React.ChangeEvent<unknown>, newPage: number) {
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
      <Button
        variant="contained"
        color="success"
        sx={{ position: "absolute", right: 40, top: 20 }}
      >
        {pageLocalization.admin.save}
      </Button>
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
      <Pagination
        count={allProducts?.total_pages}
        page={page}
        color="secondary"
        onChange={changePage}
      />
    </Stack>
  );
}
