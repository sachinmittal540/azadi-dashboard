import React from "react";
import { TextField } from "@material-ui/core";

function CustomTextField(props) {
  const {
    label,
    value,
    fullWidth = false,
    required = false,
    multiline = false,
    rows = 1,
    id,
    onChange,
    name
  } = props;

  return (
    <div style={{ marginBottom: "20px" }}>
      <TextField
        required={required}
        id={id}
        label={label}
        defaultValue={value}
        fullWidth={fullWidth}
        multiline={multiline}
        rows={rows}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default CustomTextField;
