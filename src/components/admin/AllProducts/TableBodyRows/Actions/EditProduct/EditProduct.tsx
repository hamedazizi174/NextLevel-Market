import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useState } from "react";
import EditModal from "./EditModal/EditModal";

type Prop = {
  id: string;
};

export default function EditProduct({ id }: Prop) {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="edit" onClick={openModal}>
        <EditIcon color="info" />
      </IconButton>
      <EditModal open={open} closeModal={closeModal} id={id} />
    </>
  );
}
