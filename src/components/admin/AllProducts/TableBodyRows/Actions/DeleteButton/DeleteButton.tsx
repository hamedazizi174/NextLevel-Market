import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteProduct } from "@/api/products/products.queries";

type prop = {
  id: string;
};

export default function DeleteButton({ id }: prop) {
  const { mutate } = useDeleteProduct(id);
  function deleteProduct() {
    mutate();
  }

  return (
    <IconButton aria-label="delete" onClick={deleteProduct}>
      <DeleteIcon color="error" />
    </IconButton>
  );
}
