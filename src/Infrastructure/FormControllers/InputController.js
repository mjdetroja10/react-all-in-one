import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const InputController = (props) => {
  const { control, name, type, label, variant } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          variant={variant}
          label={label}
          type={type}
          {...field}
          fullWidth
        />
      )}
    />
  );
};

InputController.defaultProps = {
  type: "text",
  label: "",
  variant: "outlined",
};
