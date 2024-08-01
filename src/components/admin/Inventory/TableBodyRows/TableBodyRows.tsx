import { ProductType } from "@/types/types";
import { TableCell, TableRow } from "@mui/material";

type Props = {
  allProducts: ProductType[];
};

export default function TableBodyRows({ allProducts }: Props) {
  let rank = 1;
  const rows = allProducts?.map((product: ProductType) => {
    return {
      id: product._id,
      rank: rank++,
      productName: product.name,
      price: product.price,
      quantity: product.quantity,
    };
  });

  return (
    <>
      {rows?.map((row) => (
        <TableRow key={row.id}>
          <TableCell align="center" width={90}>
            {row.rank}
          </TableCell>
          <TableCell>{row.productName}</TableCell>
          <TableCell align="center">${row.price}</TableCell>
          <TableCell align="center">{row.quantity}</TableCell>
        </TableRow>
      ))}
    </>
  );
}
