import { localization, pageLocalization } from "@/constant/localization";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

type Props = {
  open: boolean;
  closeModal: () => void;
  saveEdits: () => void;
};

export default function ConfirmEdit({ open, closeModal, saveEdits }: Props) {
  return (
    <Dialog open={open} onClose={closeModal}>
      <DialogTitle>{pageLocalization.admin.confirmEditProducts}</DialogTitle>
      <DialogActions>
        <Button
          variant="contained"
          color="success"
          onClick={saveEdits}
          fullWidth
        >
          {pageLocalization.admin.save}
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
  );
}
