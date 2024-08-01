import { ProductType } from "@/types/types";
import Actions from "./Actions/Actions";
import { TableCell, TableRow } from "@mui/material";
import Image from "next/image";

type Props = {
  allProducts: ProductType[];
};

export default function TableBodyRows({ allProducts }: Props) {
  let rank = 1;
  const rows = allProducts?.map((product: ProductType) => {
    return {
      id: product._id,
      rank: rank++,
      image: product.images,
      productName: product.name,
      division: `${product.category.name}/${product.subcategory.name}`,
      actions: <Actions />,
    };
  });

  return (
    <>
      {rows?.map((row) => (
        <TableRow key={row.id}>
          <TableCell align="center">{row.rank}</TableCell>
          <TableCell>
            <Image
              src={`http://${row.image[0]}`}
              alt="product image"
              width={80}
              height={80}
            />
          </TableCell>
          <TableCell>{row.productName}</TableCell>
          <TableCell align="center">{row.division}</TableCell>
          <TableCell>{row.actions}</TableCell>
        </TableRow>
      ))}
    </>
  );
}
