/** @format */

import React, { ReactElement, ReactNode, useState, useEffect } from "react";

import { Grid } from "@mui/material";

import Image from "next/image";

import { Irankidz_container, Inputs, Buttons, Theme } from "../Tools/index";

import Side_menu from "./sidemenu/Side_menu";

import SearchIcon from "@mui/icons-material/Search";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Props, { datatype, sidemenu_item_active } from "./type";

export default function Header_section(props: Props) {
  const data: datatype[] = [
    {
      text: "دخترانه",
      link: "/",
      action: false,
      property: [
        {
          itemtext: "پوشاک",
          itemlink: "/",
          action: false,
        },
        {
          itemtext: "اسباب بازی",
          itemlink: "/",
          action: false,
        },
        {
          itemtext: "شلوار",
          itemlink: "/",
          action: false,
        },
        {
          itemtext: "کفش",
          itemlink: "/",
          action: false,
        },
      ],
    },
    {
      text: "پسرانه",
      link: "#",
      action: false,
    },
    {
      text: "اسباب بازی وسرگرمی",
      link: "#",
      action: false,
    },
    {
      text: "ماشین, هواپیما, قطار, قایق",
      link: "#",
      action: false,
    },
    {
      text: "کفش",
      link: "#",
      action: false,
    },
    {
      text: "کیف و کوله پشتی",
      link: "#",
      action: false,
    },
    {
      text: "دیجیتال",
      link: "#",
      action: false,
    },
  ];
  const [mydata, setmydata] = useState<datatype[]>();

  const login = (data: string) => {};

  const [rotate, setrotate] = useState(false);
  const sidemenu_item_active = (v: datatype, i: number) => {
    const arr = [...data];
    v.action
      ? arr[i].action != arr[i].action
      : (arr[i].action = !arr[i].action);
    setmydata(arr);
    console.log(v.action);
  };

  const data2: typeof props.sections = [
    {
      text: "ورود به حساب",
      link: "#",
    },
    { text: "یک حساب کاربری ایجاد کنید", link: "#" },
  ];
  useEffect(() => {
    const arr = [...data];
    setmydata(arr);
    console.log(mydata);
  }, []);
  return (
    <Irankidz_container>
      <Grid
        container
        sx={{
          width: "100%",
          height: "130px",
          fontFamily: "iran-sans",
          display: "flex",
          padding: "15px 0",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Grid item id='web_image'>
          <Image
            alt='header0image'
            src={"/images/irankidz.png"}
            width={70}
            height={70}
          />
        </Grid>
        <Grid
          xs={4}
          id='search'
          sx={{ position: "relative", direction: "ltr" }}
          item>
          <Inputs
            size='small'
            sx={{
              height: "20px",
              width: "100%",
            }}
            placeholder='جستجوکنید...'
          />
          <Buttons
            onSubmit={() => {
              console.log("123");
            }}
            sx={{
              backgroundColor: "transparent",
              position: "absolute",
              boxShadow: "none",
              left: "0%",
              minWidth: "30px",
              top: "33%",
              color: "gray",
              cursor: "pointer",
              height: "fit-content",
              padding: "0",
              width: "20px",
              "&:hover": {
                color: "#f5583e",
                backgroundColor: "transparent",
                boxShadow: "none",
              },
            }}>
            <SearchIcon
              sx={{
                color: "gray",
                cursor: "pointer",
                "&:hover": {
                  color: "#f5583e",
                },
              }}
            />
          </Buttons>
        </Grid>
        <Grid id='sidemenu_and_icons' item>
          <Grid id='sidemenu' container>
            <Side_menu
              item_action={(v, i) => sidemenu_item_active(v, i)}
              info={mydata}
              sections={data2}
            />
          </Grid>
          <Grid id='icons'></Grid>
          <Grid id='login'></Grid>
        </Grid>
      </Grid>
    </Irankidz_container>
  );
}
// const data: datatype[] = [
//   {
//     text: "دخترانه",
//     link: "/",
//     action: false,
//     icon: (
//       <KeyboardArrowDownIcon
//         sx={{ fontSize: "15px", transition: "0.5s ease" }}
//       />
//     ),
//   },
//   {
//     text: "پسرانه",
//     link: "#",
//     action: false,
//     icon: <KeyboardArrowDownIcon sx={{ fontSize: "15px" }} />,
//   },
//   {
//     text: "اسباب بازی وسرگرمی",
//     link: "#",
//     action: false,
//     icon: <KeyboardArrowDownIcon sx={{ fontSize: "15px" }} />,
//   },
//   {
//     text: "ماشین,هواپیما,قطار,قایق",
//     link: "#",
//     action: false,
//     icon: <KeyboardArrowDownIcon sx={{ fontSize: "15px" }} />,
//   },
//   {
//     text: "کفش",
//     link: "#",
//     action: false,
//     icon: <KeyboardArrowDownIcon sx={{ fontSize: "15px" }} />,
//   },
//   {
//     text: "کیف و کوله پشتی",
//     link: "#",
//     action: false,
//     icon: <KeyboardArrowDownIcon sx={{ fontSize: "15px" }} />,
//   },
//   {
//     text: "دیجیتال",
//     link: "#",
//     action: false,
//     icon: <KeyboardArrowDownIcon sx={{ fontSize: "15px" }} />,
//   },
// ];
