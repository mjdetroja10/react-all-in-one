import { Alert, Box, Paper, Stack, Typography } from "@mui/material";
import { LoginForm } from "./LoginForm/LoginForm";
import { useState } from "react";

export const Login = () => {
  const [error, setError] = useState("");

  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100vh", margin: 2 }}
      >
        <Paper sx={{ padding: (12, 6) }}>
          {error && (
            <Alert severity="error" onClose={() => setError("")}>
              {error}
            </Alert>
          )}
          <Typography
            variant="h5"
            align="center"
            my={3}
            fontWeight="fontWeightBold"
          >
            Login here
          </Typography>
          <LoginForm setError={setError} />
        </Paper>
      </Stack>
    </Box>
  );
};
