import { NAME, SORT } from "@/constant/general";
import { pageLocalization } from "@/constant/localization";
import { TableCell, TableRow, TableSortLabel } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

type Props = {
  setSortBy: Dispatch<SetStateAction<string>>;
};

export default function TableHeadRow({ setSortBy }: Props) {
  const [orderDir, setOrderDir] = useState<SORT | undefined>(SORT.ASC);

  const requestSort = () => {
    switch (orderDir) {
      case SORT.ASC:
        setSortBy(NAME);
        setOrderDir(SORT.DESC);
        break;
      case SORT.DESC:
        setSortBy(`-${NAME}`);
        setOrderDir(undefined);
        break;
      case undefined:
        setSortBy("");
        setOrderDir(SORT.ASC);
    }
  };
  console.log(orderDir);

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
        <TableSortLabel
          active={true}
          direction={orderDir}
          onClick={requestSort}
          IconComponent={
            orderDir === SORT.ASC
              ? RemoveIcon
              : orderDir === SORT.DESC
              ? ArrowDownwardIcon
              : ArrowUpwardIcon
          }
        >
          {pageLocalization.admin.productName}
        </TableSortLabel>
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
