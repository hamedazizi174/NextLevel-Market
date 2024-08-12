import { Box, Stack } from "@mui/material";
import SignInForm from "./SIgnInForm/SignInForm";
import CreateOrForgot from "./CreateOrForgot/CreateOrForgot";
import AvatarAndTitle from "./AvatarAndTitle/AvatarAndTitle";

export default function SignInSide() {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Box px={4} py={8} maxWidth={500}>
        <AvatarAndTitle />
        <SignInForm />
        <CreateOrForgot />
      </Box>
    </Stack>
  );
}
