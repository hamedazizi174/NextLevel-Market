import { pageLocalization } from "@/constant/localization";
import { Grid } from "@mui/material";
import Link from "next/link";

export default function CreateOrForgot() {
  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={12} sm={"auto"} mt={1}>
        <Link href="#" style={{ textDecoration: "none" }}>
          {pageLocalization.signIn.dontHaveAccount}
        </Link>
      </Grid>
      <Grid item xs={12} sm={"auto"} mt={1}>
        <Link href="#" style={{ textDecoration: "none" }}>
          {pageLocalization.signIn.forgotPassword}
        </Link>
      </Grid>
    </Grid>
  );
}
