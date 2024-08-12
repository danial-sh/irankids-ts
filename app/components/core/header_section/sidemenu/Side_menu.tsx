/** @format */

import { Grid, Typography } from "@mui/material";

import React, { useRef, useState } from "react";

import { Box, Drawer, List, ListItem, ListItemText } from "./mui_imports";

import { Buttons } from "../../Tools/index";

import { Theme } from "../../Tools/index";

import MenuIcon from "@mui/icons-material/Menu";

import Props from "./type";

import Link from "next/link";
import Items_side from "../../common/items_side/Items_side";

export default function Side_menu(props: Props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [menus, setmenus] = useState<boolean>(true);

  const [accounts, setaccount] = useState<boolean>(false);

  const mybuttons = [
    {
      text: "حساب",
      action: () => {
        setmenus(false), setaccount(true);
      },
      color: accounts,
    },
    {
      text: "منو ها",
      action: () => {
        setmenus(true), setaccount(false);
      },
      color: menus,
    },
  ];

  const DrawerList = (
    <Box
      sx={{ width: 300, display: "flex", padding: "0%" }}
      role='presentation'>
      <List
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0%",
        }}>
        <Grid sx={{ display: "flex", width: "100%" }}>
          {mybuttons?.map((v, i) => (
            <Theme>
              <Buttons
                disableRipple
                key={i}
                sx={{
                  width: "50%",
                  height: "60px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: `${v.color ? "#e9551b" : "black"}`,
                  "&:hover": {
                    backgroundColor: `${v.color ? "#e9551b" : "black"}`,
                  },
                }}
                onClick={() => v.action()}>
                {v.text}
              </Buttons>
            </Theme>
          ))}
        </Grid>
        {menus && (
          <Items_side
            info={props.info}
            item_action={(v, i) => props.item_action(v, i)}
          />
        )}
        {accounts &&
          props.sections?.map((v, i) => (
            <ListItem
              key={i}
              disablePadding
              sx={{
                width: "100%",
                height: "60px",
                borderBottom: "1px solid gray",
                color: "rgba(0, 0, 0, 0.87)",
                p: 1,
                fontSize: "18px",
                fontWeight: "bold",
              }}>
              <ListItemText
                title={v.text}
                sx={{ width: "100%", color: "rgba(0, 0, 0, 0.87)" }}>
                <Grid
                  sx={{
                    width: "100%",
                    color: "rgba(0, 0, 0, 0.87)",
                    fontSize: "18px",
                    fontWeight: "300",
                  }}>
                  <Link
                    href={v.link}
                    title={v.text}
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <Typography>{v.text}</Typography>
                  </Link>
                </Grid>
              </ListItemText>
            </ListItem>
          ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Buttons
        sx={{
          backgroundColor: "transparent",
          color: "black",
          minWidth: "30px",
          boxShadow: "none",
          "&:hover": {
            minWidth: "30px",
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "black",
          },
        }}
        onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ fontWeight: "100", fontSize: "33px" }} />
      </Buttons>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
