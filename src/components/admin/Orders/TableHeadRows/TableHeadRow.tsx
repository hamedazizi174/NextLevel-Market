import { CREATED_AT, SORT } from "@/constant/general";
import { localization, pageLocalization } from "@/constant/localization";
import { TableCell, TableRow, TableSortLabel } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  setSortBy: Dispatch<SetStateAction<string>>;
};

export default function TableHeadRow({ setSortBy }: Props) {
  const [orderDir, setOrderDir] = useState<SORT | undefined>(SORT.ASC);

  const requestSort = () => {
    switch (orderDir) {
      case SORT.ASC:
        setSortBy(CREATED_AT);
        setOrderDir(SORT.DESC);
        break;
      case SORT.DESC:
        setSortBy(`-${CREATED_AT}`);
        setOrderDir(undefined);
        break;
      default:
        setSortBy("");
        setOrderDir(SORT.ASC);
    }
  };

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
        <TableSortLabel
          active={true}
          direction={orderDir}
          onClick={requestSort}
        >
          {pageLocalization.admin.orderTime}
        </TableSortLabel>
      </TableCell>
      <TableCell
        align="center"
        sx={{ fontWeight: 900, fontSize: 20, width: "20%" }}
      ></TableCell>
    </TableRow>
  );
}
