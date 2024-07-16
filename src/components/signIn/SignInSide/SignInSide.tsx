import { Grid, Paper, Stack } from "@mui/material";
import SignInForm from "./SIgnInForm/SignInForm";
import CreateOrForgot from "./CreateOrForgot/CreateOrForgot";
import AvatarAndTitle from "./AvatarAndTitle/AvatarAndTitle";
import Image from "next/image";

export default function SignInSide() {
  return (
    <Grid container component="main" height="100vh">
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} py={8}>
        <Stack direction="column" alignItems="center" px={4}>
          <AvatarAndTitle />
          <SignInForm />
          <CreateOrForgot />
        </Stack>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        // sx={{
        //   backgroundImage: 'url("/hero/heroBook.jpeg")',
        //   backgroundSize: "cover",
        // }}
      >
        <Image src="/hero/heroBook.jpeg" alt="book" layout="fill" />
      </Grid>
    </Grid>
  );
}
