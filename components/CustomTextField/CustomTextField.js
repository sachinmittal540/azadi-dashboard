import React from "react";
import { TextField } from "@material-ui/core";

function CustomTextField(props) {
  const { label, value, fullWidth = false, required = false } = props;
  return (
    <div style={{marginBottom: "20px"}}>
    <TextField
      required={required}
      id="outlined-required"
      label={label}
      defaultValue={value}
      fullWidth={fullWidth}
    />
    </div>
  );
}

export default CustomTextField;
