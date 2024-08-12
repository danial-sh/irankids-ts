/** @format */

import { ReactNode } from "react";
export type sidemenu = {
  text?: string;
  link?: string;
  action?: boolean;
  property?: {
    itemtext?: string;
    itemlink?: string;
    itemicon?: ReactNode;
    action?: boolean;
  }[];
};

export default interface Props extends sidemenu {
  info?: sidemenu[];
  item_action: (v: sidemenu, i: number) => void;
  sections?: { text: string; link: string }[];
}
