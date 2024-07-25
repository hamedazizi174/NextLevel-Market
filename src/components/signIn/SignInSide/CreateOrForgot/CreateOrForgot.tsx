import { pageLocalization } from "@/constant/localization";
import { Stack } from "@mui/material";
import Link from "next/link";

export default function CreateOrForgot() {
  return (
    <Stack direction="row" justifyContent="space-between" width="100%">
      <Link href="#">{pageLocalization.signIn.dontHaveAccount}</Link>
      <Link href="#">{pageLocalization.signIn.forgotPassword}</Link>
    </Stack>
  );
}
