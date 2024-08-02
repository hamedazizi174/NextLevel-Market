import DeleteButton from "@/components/admin/AllProducts/TableBodyRows/Actions/DeleteButton/DeleteButton";
import EditButton from "@/components/admin/AllProducts/TableBodyRows/Actions/EditButton/EditButton";
import { Stack } from "@mui/material";

type prop = {
  id: string;
};

export default function Actions({ id }: prop) {
  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
      <EditButton />
      <DeleteButton id={id} />
    </Stack>
  );
}
