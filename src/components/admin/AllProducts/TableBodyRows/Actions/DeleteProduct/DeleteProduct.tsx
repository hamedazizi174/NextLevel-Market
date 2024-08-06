import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DeleteModal from "./DeleteModal/DeleteModal";

type Prop = {
  id: string;
};

export default function DeleteProduct({ id }: Prop) {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="delete" onClick={openModal}>
        <DeleteIcon color="error" />
      </IconButton>
      <DeleteModal open={open} closeModal={closeModal} id={id} />
    </>
  );
}
