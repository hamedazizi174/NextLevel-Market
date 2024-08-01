import { localization, pageLocalization } from "@/constant/localization";
import { TableCell, TableRow } from "@mui/material";

export default function TableHeadRow() {
  return (
    <TableRow>
      <TableCell
        align="center"
        sx={{ fontWeight: 900, fontSize: 20, width: "10%" }}
      >
        {pageLocalization.admin.rank}
      </TableCell>
      <TableCell sx={{ fontWeight: 900, fontSize: 20, width: "20%" }}>
        {pageLocalization.admin.fullName}
      </TableCell>
      <TableCell
        align="center"
        sx={{ fontWeight: 900, fontSize: 20, width: "25%" }}
      >
        {localization.totalPrice}
      </TableCell>
      <TableCell
        align="center"
        sx={{ fontWeight: 900, fontSize: 20, width: "25%" }}
      >
        {pageLocalization.admin.orderTime}
      </TableCell>
      <TableCell
        align="center"
        sx={{ fontWeight: 900, fontSize: 20, width: "20%" }}
      ></TableCell>
    </TableRow>
  );
}
