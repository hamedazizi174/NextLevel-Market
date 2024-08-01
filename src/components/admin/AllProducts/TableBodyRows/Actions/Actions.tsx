import DeleteButton from "@/components/admin/AllProducts/TableBodyRows/Actions/DeleteButton/DeleteButton";
import EditButton from "@/components/admin/AllProducts/TableBodyRows/Actions/EditButton/EditButton";
import { Stack } from "@mui/material";

export default function Actions() {
  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <EditButton />
      <DeleteButton />
    </Stack>
  );
}
