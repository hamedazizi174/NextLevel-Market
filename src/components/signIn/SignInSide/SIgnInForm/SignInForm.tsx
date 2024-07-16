import { pageLocalization } from "@/constant/localization";
import { Box, Button, TextField } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";

export default function SignInForm() {
  const { register, handleSubmit } = useForm();

  function handleLogin(data: FieldValues) {
    console.log(data);
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleLogin)} mt={2}>
      <TextField
        type="email"
        label={pageLocalization.signIn.email}
        {...register("email")}
        margin="normal"
        fullWidth
        autoFocus
        required
      />
      <TextField
        type="password"
        label={pageLocalization.signIn.password}
        {...register("password")}
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {pageLocalization.signIn.signIn}
      </Button>
    </Box>
  );
}
