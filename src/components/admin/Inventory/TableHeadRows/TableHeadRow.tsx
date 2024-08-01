import { pageLocalization } from "@/constant/localization";
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
      <TableCell sx={{ fontWeight: 900, fontSize: 20, width: "40%" }}>
        {pageLocalization.admin.productName}
      </TableCell>
      <TableCell
        align="center"
        sx={{ fontWeight: 900, fontSize: 20, width: "25%" }}
      >
        {pageLocalization.admin.price}
      </TableCell>
      <TableCell
        align="center"
        sx={{ fontWeight: 900, fontSize: 20, width: "25%" }}
      >
        {pageLocalization.admin.quantity}
      </TableCell>
    </TableRow>
  );
}
