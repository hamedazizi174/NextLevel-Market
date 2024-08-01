import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

export default function EditButton() {
  return (
    <IconButton aria-label="edit">
      <EditIcon color="info" />
    </IconButton>
  );
}
