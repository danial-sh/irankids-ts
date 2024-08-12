/** @format */
"use client";
import { useState } from "react";
import { Buttons, Inputs, Loading } from "./components/core/Tools";
import { Grid, Typography } from "@mui/material";

import Header_section from "./components/core/header_section/Header";
type props = {};
export default function Home({}: props) {
  const [show, setshow] = useState(false);
  return (
    <Grid dir='rtl'>
      <Header_section />
    </Grid>
  );
}
