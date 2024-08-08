import { useGetAllOrders } from "@/api/orders/orders.queries";
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
import OrdersStatus from "./OrdersStatus/OrdersStatus";

export default function Orders() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [ordersStatus, setOrdersStatus] = useState<boolean | undefined>();
  const { data: allOrders } = useGetAllOrders(page, ordersStatus, sortBy);

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      height="550px"
      p={2}
      position="relative"
    >
      <OrdersStatus setOrdersStatus={setOrdersStatus} />
      <Typography variant="h5" fontWeight={900}>
        {pageLocalization.admin.ordersTable}
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
        <Table aria-label="orders table" stickyHeader>
          <TableHead>
            <TableHeadRow setSortBy={setSortBy} />
          </TableHead>
          <TableBody>
            <TableBodyRows allOrders={allOrders?.data.orders} />
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationCom page={page} setPage={setPage} items={allOrders} />
    </Stack>
  );
}
