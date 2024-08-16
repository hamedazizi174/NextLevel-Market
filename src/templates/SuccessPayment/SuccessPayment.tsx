import { localization } from "@/constant/localization";
import { ROUTES } from "@/constant/routes";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

export default function SuccessPaymentTemplate() {
  return (
    <Dialog open={true}>
      <DialogTitle>{localization.successPayment}</DialogTitle>
      <DialogActions>
        <Button
          variant="contained"
          color="success"
          href={ROUTES.HOME}
          fullWidth
        >
          {localization.backToHome}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
