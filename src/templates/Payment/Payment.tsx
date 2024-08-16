import { localization } from "@/constant/localization";
import { ROUTES } from "@/constant/routes";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

export default function PaymentTemplate() {
  return (
    <Dialog open={true}>
      <DialogTitle>{localization.confirmPayment}</DialogTitle>
      <DialogActions>
        <Button
          variant="contained"
          color="success"
          href={ROUTES.SUCCESS_PAYMENT}
          fullWidth
        >
          {localization.yes}
        </Button>
        <Button
          variant="contained"
          color="error"
          href={ROUTES.FAIL_PAYMENT}
          fullWidth
        >
          {localization.cancel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
