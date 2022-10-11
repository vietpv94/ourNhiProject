import * as React from "react";
import logo from "@Assets/images/Logo.png";
import { LogoImage } from "./style";
export interface ILogoProps {}

export function Logo(props: ILogoProps) {
  return <LogoImage src={logo} alt="logo" />;
}