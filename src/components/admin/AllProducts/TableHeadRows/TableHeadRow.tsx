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
      <TableCell
        align="center"
        sx={{ fontWeight: 900, fontSize: 20, width: "10%" }}
      >
        {pageLocalization.admin.image}
      </TableCell>
      <TableCell sx={{ fontWeight: 900, fontSize: 20, width: "35%" }}>
        {pageLocalization.admin.productName}
      </TableCell>
      <TableCell
        align="center"
        sx={{ fontWeight: 900, fontSize: 20, width: "23%" }}
      >
        {pageLocalization.admin.division}
      </TableCell>
      <TableCell
        align="center"
        sx={{ fontWeight: 900, fontSize: 20, width: "22%" }}
      >
        {pageLocalization.admin.actions}
      </TableCell>
    </TableRow>
  );
}
