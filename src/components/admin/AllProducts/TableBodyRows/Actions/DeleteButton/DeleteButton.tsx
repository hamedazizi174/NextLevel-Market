import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteButton() {
  return (
    <IconButton aria-label="delete">
      <DeleteIcon color="error" />
    </IconButton>
  );
}
