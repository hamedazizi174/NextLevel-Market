import { pageLocalization } from "@/constant/localization";
import { OrderType } from "@/types/types";
import { TableCell, TableRow } from "@mui/material";

type Props = {
  allOrders: OrderType[];
};

export default function TableBodyRows({ allOrders }: Props) {
  let rank = 1;
  const rows = allOrders?.map((order: OrderType) => {
    return {
      id: order._id,
      rank: rank++,
      fullName: `${order.user.firstname} ${order.user.lastname}`,
      totalPrice: order.totalPrice,
      orderTime: order.createdAt,
      orderCheck: pageLocalization.admin.orderCheck,
    };
  });

  return (
    <>
      {rows?.map((row) => (
        <TableRow key={row.id}>
          <TableCell align="center" width={90}>
            {row.rank}
          </TableCell>
          <TableCell>{row.fullName}</TableCell>
          <TableCell align="center">${row.totalPrice}</TableCell>
          <TableCell align="center">{row.orderTime}</TableCell>
          <TableCell align="center">{row.orderCheck}</TableCell>
        </TableRow>
      ))}
    </>
  );
}
