import { pageLocalization } from "@/constant/localization";
import { Button } from "@mui/material";
import { useState } from "react";
import AddModal from "./AddModal/AddModal";

export default function AddProduct() {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={openModal}
        sx={{ position: "absolute", right: 40, top: 20 }}
      >
        {pageLocalization.admin.addProduct}
      </Button>
      <AddModal open={open} closeModal={closeModal} />
    </>
  );
}
