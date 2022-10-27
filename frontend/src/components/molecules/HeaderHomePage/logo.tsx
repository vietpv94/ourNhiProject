import * as React from "react";
import logo from "@Assets/images/Logo.png";
import { LogoImage } from "./style";
export interface ILogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: ILogoProps) {
  return <LogoImage src={logo} alt="logo" onClick={onClick} />;
}
