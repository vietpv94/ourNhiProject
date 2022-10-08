import * as React from "react";
import logo from "@Assets/images/logo.png";
import { LogoImage } from "./style";
export interface ILogoProps {}

export function Logo(props: ILogoProps) {
  return <LogoImage src={logo} alt="logo" />;
}
