import { useForm } from "react-hook-form";
import { Button, CircularProgress, Grid } from "@mui/material";
import { useEffect } from "react";
import { useAuth } from "Application/Hooks/useAuth";
import { InputController } from "Infrastructure/FormControllers/InputController";
import { PasswordController } from "Infrastructure/FormControllers/PasswordController";
import { useLogin } from "Application/Hooks/useLogin";

const submitHandler = (auth) => (data) => {
  auth.login({ ...data, role: "user" });
};

const onSubmit = (mutate, auth) => (data) =>
  mutate(data, { onSuccess: submitHandler(auth) });

export const LoginForm = ({ setError }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const auth = useAuth();

  const { mutate, isLoading, error, data } = useLogin();

  useEffect(() => {
    if (data?.error || error) setError(error ? "Network error!" : data.error);
  }, [data?.error, setError, error]);

  return (
    <form onSubmit={handleSubmit(onSubmit(mutate, auth))}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputController name="email" label="Email" control={control} />
        </Grid>
        <Grid item xs={12}>
          <PasswordController
            name="password"
            label="Password"
            control={control}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button
            type="submit"
            variant="contained"
            endIcon={
              isLoading && <CircularProgress color="secondary" size={16} />
            }
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
