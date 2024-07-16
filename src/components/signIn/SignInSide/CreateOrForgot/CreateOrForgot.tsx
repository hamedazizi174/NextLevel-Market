import { pageLocalization } from "@/constant/localization";
import { Link, Stack } from "@mui/material";

export default function CreateOrForgot() {
  return (
    <Stack direction="row" justifyContent="space-between" width="100%">
      <Link href="#" variant="body2">
        {pageLocalization.signIn.dontHaveAccount}
      </Link>
      <Link href="#" variant="body2">
        {pageLocalization.signIn.forgotPassword}
      </Link>
    </Stack>
  );
}
