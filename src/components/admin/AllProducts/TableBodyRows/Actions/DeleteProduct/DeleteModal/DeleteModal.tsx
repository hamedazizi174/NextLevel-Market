import {
  useDeleteProduct,
  useGetProductById,
} from "@/api/products/products.queries";
import { localization, pageLocalization } from "@/constant/localization";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { toast, Toaster } from "sonner";

type Props = {
  open: boolean;
  id: string;
  closeModal: () => void;
};

export default function DeleteModal({ open, closeModal, id }: Props) {
  const { mutate } = useDeleteProduct(id);
  const { data: product } = useGetProductById(id);
  const { name, brand, category, subcategory, images } = product
    ? product.data.products[0]
    : "";

  function deleteProduct() {
    mutate();
    toast.success(pageLocalization.admin.deleteProductSuccess);
  }

  return (
    <>
      <Toaster richColors position="top-left" />
      <Dialog open={open} onClose={closeModal}>
        <DialogTitle>{pageLocalization.admin.confirmDeleteProduct}</DialogTitle>
        <DialogContent>
          <Stack direction="row">
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                {`${pageLocalization.admin.productName}: ${name}`}
              </Grid>
              <Grid item xs={12} md={6}>
                {`${pageLocalization.admin.brand}: ${brand}`}
              </Grid>
              <Grid item xs={12} md={6}>
                {`${pageLocalization.admin.category}: ${category?.name}`}
              </Grid>
              <Grid item xs={12} md={6}>
                {`${pageLocalization.admin.subcategory}: ${subcategory?.name}`}
              </Grid>
            </Grid>
            <Image
              src={images ? `http://${images[0]}` : ""}
              alt={name}
              width={90}
              height={90}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            onClick={deleteProduct}
            fullWidth
          >
            {localization.delete}
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={closeModal}
            fullWidth
          >
            {localization.cancel}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
