import { localization, pageLocalization } from "@/constant/localization";
import { Stack, Typography } from "@mui/material";

export default function Welcome() {
  return (
    <Stack justifyContent="center" alignItems="center" height="500px" gap={7}>
      <Typography variant="h3" fontWeight={900}>
        {localization.hi}
      </Typography>
      <Typography variant="h4">{pageLocalization.admin.welcome}</Typography>
    </Stack>
  );
}
