import { pageLocalization } from "@/constant/localization";
import { Button } from "@mui/material";
import { useState } from "react";
import ConfirmEdit from "./ConfirmEdit/ConfirmEdit";
import { useInventoryStore } from "@/store/store";
import { useEditProduct } from "@/api/products/products.queries";
import { toast, Toaster } from "sonner";

export default function EditPriceQuantity() {
  const [open, setOpen] = useState(false);
  const inventoryStore = useInventoryStore((state) => state.inventory);
  const resetInventoryStore = useInventoryStore((state) => state.reset);
  const { mutate: editProductMutate } = useEditProduct();

  const saveEdits = () => {
    if (inventoryStore.length > 0) {
      inventoryStore.map((product) => {
        const formData = new FormData();
        formData.append("price", `${product.price}`);
        formData.append("quantity", `${product.quantity}`);
        editProductMutate({ product: formData, productId: product.id });
      });
      closeModal();
      resetInventoryStore();
      toast.success(pageLocalization.admin.saveEditSuccess);
    }
  };

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <>
      <Toaster richColors position="top-left" />
      <Button
        variant="contained"
        color="success"
        sx={{ position: "absolute", right: 40, top: 20 }}
        onClick={openModal}
      >
        {pageLocalization.admin.save}
      </Button>
      <ConfirmEdit open={open} closeModal={closeModal} saveEdits={saveEdits} />
    </>
  );
}
