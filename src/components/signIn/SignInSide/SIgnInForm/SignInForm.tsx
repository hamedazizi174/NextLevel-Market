import { usePostUser } from "@/api/auth/auth.queries";
import { pageLocalization } from "@/constant/localization";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function SignInForm() {
  const [user, setUser] = useState({ username: "", password: "" });
  const { register, handleSubmit } = useForm();
  const { mutate: signinMutate } = usePostUser(user);

  function handleLogin(data: FieldValues) {
    setUser({ username: data.username, password: data.password });
    signinMutate();
  }

  return (
    <Box component="form" onSubmit={handleSubmit(handleLogin)} mt={2}>
      <TextField
        label={pageLocalization.signIn.email}
        {...register("username")}
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
