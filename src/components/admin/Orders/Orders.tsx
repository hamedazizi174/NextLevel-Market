import { useGetAllOrders } from "@/api/orders/orders.queries";
import { pageLocalization } from "@/constant/localization";
import {
  FormControl,
  FormControlLabel,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
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

export default function Orders() {
  const [page, setPage] = useState(1);
  const [ordersStatus, setOrdersStatus] = useState<boolean | undefined>();
  const { data: allOrders } = useGetAllOrders(page, ordersStatus);

  function changePage(event: React.ChangeEvent<unknown>, newPage: number) {
    setPage(newPage);
  }

  const changeShowingOrders = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "true") {
      setOrdersStatus(true);
    } else {
      setOrdersStatus(false);
    }
  };

  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      height="550px"
      p={2}
      position="relative"
    >
      <FormControl sx={{ position: "absolute", right: 40, top: 20 }}>
        <RadioGroup row onChange={changeShowingOrders}>
          <FormControlLabel
            value={true}
            control={<Radio />}
            label={pageLocalization.admin.delivered}
          />
          <FormControlLabel
            value={false}
            control={<Radio />}
            label={pageLocalization.admin.notDelivered}
          />
        </RadioGroup>
      </FormControl>
      <Typography variant="h5" fontWeight={900}>
        {pageLocalization.admin.ordersTable}
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: "25px" }}>
        <Table aria-label="orders table" stickyHeader>
          <TableHead>
            <TableHeadRow />
          </TableHead>
          <TableBody>
            <TableBodyRows allOrders={allOrders?.data.orders} />
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={allOrders?.total_pages}
        page={page}
        color="secondary"
        onChange={changePage}
      />
    </Stack>
  );
}
