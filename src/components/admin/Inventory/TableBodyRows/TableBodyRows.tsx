import { InventoryProductType, ProductType } from "@/types/types";
import { TableCell, TableRow, TextField } from "@mui/material";
import { ClickAwayListener } from "@mui/base";
import { useEffect, useState } from "react";
import { useInventoryStore } from "@/store/store";

type Props = {
  allProducts: ProductType[];
};

export default function TableBodyRows({ allProducts }: Props) {
  let rank = 1;
  const data = useInventoryStore((state) => state.inventory);
  const updateInventoryStore = useInventoryStore((state) => state.update);
  const resetInventoryStore = useInventoryStore((state) => state.reset);
  const [rowIndex, setRowIndex] = useState(-1);
  const [columnIndex, setColumnIndex] = useState(-1);
  const [rows, setRows] = useState<InventoryProductType[]>();

  function changeCell(rowIndex: number, colName: string, value: number) {
    if (rows) {
      colName === "price"
        ? (rows[rowIndex].price = value)
        : (rows[rowIndex].quantity = value);
    }
  }

  useEffect(() => {
    resetInventoryStore();
    setRows(
      allProducts?.map((product: ProductType) => {
        return {
          id: product._id,
          rank: rank++,
          productName: product.name,
          price: product.price,
          quantity: product.quantity,
        };
      })
    );
  }, [allProducts, rank, resetInventoryStore]);

  function exitEditMode(row: InventoryProductType) {
    setRowIndex(-1);
    setColumnIndex(-1);
    rows && updateInventoryStore(row);
  }

  return (
    <>
      {rows?.map((row, index) => (
        <TableRow key={row.id}>
          <TableCell align="center">{row.rank}</TableCell>
          <TableCell>{row.productName}</TableCell>
          <TableCell
            align="center"
            onDoubleClick={() => {
              setRowIndex(index);
              setColumnIndex(2);
            }}
          >
            {rowIndex === index && columnIndex === 2 ? (
              <TextField
                type="number"
                defaultValue={row.price}
                onChange={(e) => changeCell(index, "price", +e.target.value)}
                onKeyUp={(e) => (e.key === "Enter" ? exitEditMode(row) : null)}
              />
            ) : (
              `$${row.price}`
            )}
          </TableCell>
          {/* <ClickAwayListener onClickAway={exitEditMode}> */}
          <TableCell
            align="center"
            onDoubleClick={() => {
              setRowIndex(index);
              setColumnIndex(3);
            }}
          >
            {rowIndex === index && columnIndex === 3 ? (
              <TextField
                type="number"
                defaultValue={row.quantity}
                onChange={(e) => changeCell(index, "quantity", +e.target.value)}
                onKeyUp={(e) => (e.key === "Enter" ? exitEditMode(row) : null)}
              />
            ) : (
              row.quantity
            )}
          </TableCell>
          {/* </ClickAwayListener> */}
        </TableRow>
      ))}
    </>
  );
}
