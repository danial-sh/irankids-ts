/** @format */

import React from "react";
import { Grid } from "@mui/material";
type Props = {};

export default function Loading({}: Props) {
  return (
    <Grid
      sx={{
        position: "fixed",
        width: "100%",
        height: "100%",
        opacity: "0.4",
        filter: "blur(1px)",
        backgroundColor: "white",
        zIndex: 1,
      }}></Grid>
  );
}
