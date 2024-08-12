/** @format */

import { ReactNode } from "react";
export type datatype = {
  text?: string;
  link?: string;
  icon?: ReactNode;
  action?: boolean;
  property?: {
    itemtext?: string;
    itemlink?: string;
    itemicon?: ReactNode;
    action?: boolean;
  }[];
};
export type sidemenu_item_active = (v: datatype, i: number) => void;
export default interface Props extends datatype {
  sections?: { text: string; link: string }[];
}
