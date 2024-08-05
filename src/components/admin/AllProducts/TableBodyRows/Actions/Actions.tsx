import { Stack } from "@mui/material";
import DeleteProduct from "./DeleteProduct/DeleteProduct";
import EditProduct from "./EditProduct/EditProduct";

type prop = {
  id: string;
};

export default function Actions({ id }: prop) {
  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <EditProduct />
      <DeleteProduct id={id} />
    </Stack>
  );
}
