/** @format */

import Props from "./type";
import { Button } from "@mui/material";
import { default as MuiLoadingButton } from "@mui/lab/LoadingButton";

export default function Buttons(props: Props) {
  const { children, sx, label, ...restprops } = props;
  if (!children || restprops) {
    return (
      <MuiLoadingButton sx={sx} {...restprops}>
        {children}
      </MuiLoadingButton>
    );
  }
}
