import { pageLocalization } from "@/constant/localization";
import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function AvatarAndTitle() {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant="h5">{pageLocalization.signIn.signIn}</Typography>
    </>
  );
}
