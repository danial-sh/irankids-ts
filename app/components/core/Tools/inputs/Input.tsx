/** @format */
"use client";
import Props from "./type";
import { TextField } from "@mui/material";

export default function Inputs(props: Props) {
  const { label, helperText, sx, placeholder, value, size, ...restprops } =
    props;

  return (
    <TextField
      size={size}
      value={value}
      dir='rtl'
      label={label}
      variant='outlined'
      sx={sx}
      helperText={helperText}
      placeholder={placeholder}
    />
  );
}
