import * as React from "react";

export interface IMouseIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function MouseIcon({
  color = "#292D32",
  customStyle,
  onClick,
  style,
}: IMouseIconProps) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      width="26"
      height="26"
      viewBox="1064.7701 445.5539 419.8101 717.0565"
      enableBackground="new 1064.7701 445.5539 419.8101 717.0565"
      cursor={"pointer"}
      onClick={onClick}
      {...customStyle}
    >
      <polygon
        fill={color}
        points="1283.1857,1127.3097 1406.1421,1077.6322 1314.2406,850.1678 1463.913,852.7823 1093.4828,480.8547 
   1085.4374,1005.6964 1191.2842,899.8454 "
      />
    </svg>
  );
}
