import { pageLocalization } from "@/constant/localization";
import { Stack, Typography } from "@mui/material";

export default function Welcome() {
  return (
    <Stack justifyContent="center" alignItems="center" height="500px">
      <Typography variant="h3">{pageLocalization.admin.welcome}</Typography>
    </Stack>
  );
}
