/** @format */

import React from "react";
import { Theme, Buttons } from "../../Tools";

import { ListItem } from "../../header_section/sidemenu/mui_imports";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import Props from "./type";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
export default function Items_side(props: Props) {
  return props.info?.map((v, i) => (
    <Theme>
      <ListItem
        key={i}
        disablePadding
        sx={{
          height: "100%",
          width: "100%",
          borderBottom: "1px solid rgba(0,0,0,.192)",
        }}>
        <Grid xs={12}>
          <Buttons
            dir='rtl'
            disableRipple
            sx={{
              display: "flex",
              width: "100%",
              cursor: "pointer",
              transition: "0.3s ease",
              height: "60px",
              justifyContent: "space-between",
              borderBottom: "0.2px solid #e7e7e7e7",
              alignItems: "center",
              color: "rgba(0, 0, 0, 0.87)",
              padding: "10px 15px",
              "&:hover": {
                "&>*:nth-of-type(1)": {
                  color: "#e9551b",
                },
              },
              "&>*:nth-of-type(1)": {
                color: v.action ? "#e9551b" : "rgba(0, 0, 0, 0.87)",
              },
            }}
            onClick={(e) => props.item_action(v, i)}>
            <Grid
              sx={{
                transition: "0.5s ease",
              }}>
              <Link
                href={`${v.link}`}
                style={{
                  color: "inherit",
                  fontFamily: "iran-sans",
                  textDecoration: "none",
                  fontSize: "18px",
                  fontWeight: "600",
                }}>
                <Typography
                  variant='h6'
                  sx={{ fontSize: "inherit" }}
                  title={v.text}>
                  {v.text}
                </Typography>
              </Link>
            </Grid>
            <Grid
              sx={{
                border: "1px solid rgba(0,0,0,.192)",
                height: "22px",
                display: "flex",
                width: "22px",
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <KeyboardArrowDownIcon
                sx={{
                  color: "rgba(0, 0, 0, 0.492)",
                  fontSize: "17px",
                  transition: "0.2s  linear 0s",
                  rotate: v.action ? "180deg" : "0deg",
                }}
              />
            </Grid>
          </Buttons>
          <Grid
            dir='ltr'
            sx={{
              transition: "all 0.4s  ease",
              width: "100%",
              overflowY: "auto",
              visibility: v.action ? "visible" : "hiden",
              opacity: v.action ? 1 : 0,
              height: v.action ? "100%" : 0,
              display: "block",
              overflow: "auto",
              "&::scrollbar-track": {
                color: "red",
              },
            }}>
            {v.property?.map((item, i) => {
              return (
                <Grid
                  dir='rtl'
                  key={i}
                  xs={12}
                  sx={{
                    padding: "0 15px 0px 25px",
                    display: "flex",
                    fontSize: "14px",
                    overflow: "auto",
                    zIndex: 1,
                    justifyContent: "space-between",
                    color: "rgba(0, 0, 0, 0.87)",
                    transition: "opacity 0.5s ease 0.5s ,all 0.2s  ease 0.1s",

                    width: "100%",
                    alignItems: "center",
                    opacity: v.action ? 1 : 0,
                    visibility: v.action ? "visible" : "hidden",
                    height: v.action ? "45px" : 0,
                  }}>
                  <Link
                    href={`${item.itemlink}`}
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                    }}>
                    <Typography
                      variant='h6'
                      sx={{
                        color: "inherit",
                        fontSize: "14px",
                        fontWeight: "900",
                      }}>
                      {item.itemtext}
                    </Typography>
                  </Link>
                  <Grid
                    sx={{
                      border: "1px solid rgba(0,0,0,.192)",
                      height: "22px",
                      display: "flex",
                      width: "22px",
                      borderRadius: "5px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: "17px",
                        transition: "0.2s 0s linear",
                        fontWeight: "100",
                        rotate: item.action ? "180deg" : "0deg",
                      }}
                    />
                  </Grid>
                </Grid>
              );
            })}
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignitem: "center",
                position: "relative",
                width: "100%",
                height: "205px",
                padding: "5px 0 0 0",
              }}>
              {v.image && (
                <Image
                  alt='girl'
                  src={`${v.imageurl}`}
                  height={200}
                  width={200}
                />
              )}
              {/* شماران نو میدان الغدیر بلوار هنگام نبش کوچه الیاسی پ 1 واحد 5 شرکت وب گستران  سورین چهار شنبه ساعت 3 مترو میدان صنعت*/}
            </Grid>
          </Grid>
        </Grid>
      </ListItem>
    </Theme>
  ));
}
