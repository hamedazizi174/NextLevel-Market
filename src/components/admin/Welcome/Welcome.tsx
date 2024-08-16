import { localization, pageLocalization } from "@/constant/localization";
import { useUserStore } from "@/store/userStore";
import { Stack, Typography } from "@mui/material";

export default function Welcome() {
  const user = useUserStore((state) => state.user);
  return (
    <Stack justifyContent="center" alignItems="center" height="500px" gap={7}>
      <Typography variant="h3" fontWeight={900}>
        {localization.hi} {user?.firstname}
      </Typography>
      <Typography variant="h4">{pageLocalization.admin.welcome}</Typography>
    </Stack>
  );
}
