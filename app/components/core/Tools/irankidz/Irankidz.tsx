/** @format */

import { Grid } from "@mui/material";
import React from "react";
import Props from "./type";
export default function Irankidz_container(props: Props) {
  const { children } = props;
  return (
    <Grid
      sx={{
        maxWidth: "1450px",
        margin: "0 auto",
        position: "relative",
        width: "95%",
      }}>
      {children}
    </Grid>
  );
}
