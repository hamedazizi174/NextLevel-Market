import { localization } from "@/constant/localization";
import { ROUTES } from "@/constant/routes";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

export default function FailPaymentTemplate() {
  return (
    <Dialog open={true}>
      <DialogTitle>{localization.failPayment}</DialogTitle>
      <DialogActions>
        <Button variant="contained" color="error" href={ROUTES.HOME} fullWidth>
          {localization.backToHome}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
