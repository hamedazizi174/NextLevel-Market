import { Stack } from "@mui/material";
import DeleteProduct from "./DeleteProduct/DeleteProduct";
import EditProduct from "./EditProduct/EditProduct";

type Prop = {
  id: string;
};

export default function Actions({ id }: Prop) {
  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <EditProduct id={id} />
      <DeleteProduct id={id} />
    </Stack>
  );
}
