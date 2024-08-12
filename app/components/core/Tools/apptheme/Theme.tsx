/** @format */

import React from "react";
import CustomFont from "next/font/local";

import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import { rtlPlugin, prefixer, createCache } from "./imports";
import { CacheProvider } from "@emotion/react";

import Props from "./type";

export default function Apptheme(props: Props) {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });
  const theme = createTheme({
    typography: {
      fontFamily: "iran-sans",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
    </ThemeProvider>
  );
}
