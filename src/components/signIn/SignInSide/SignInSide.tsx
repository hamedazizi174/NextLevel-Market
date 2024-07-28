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
    // <Grid container justifyContent="center" height="100vh">
    //   <Grid item xs={12} sm={7} md={6} py={8} maxWidth={500}>
    //     <Stack px={4}>
    //       <AvatarAndTitle />
    //       <SignInForm />
    //       <CreateOrForgot />
    //     </Stack>
    //   </Grid>
    //   <Grid
    //     item
    //     xs={false}
    //     sm={5}
    //     md={6}
    //     sx={{
    //       backgroundImage: 'url("/signin.jpeg")',
    //       backgroundSize: "cover",
    //     }}
    //   />
    // </Grid>
  );
}
