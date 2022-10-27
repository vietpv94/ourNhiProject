import * as React from "react";

export interface IZoomOutIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
  onClick?: () => void;
}

export function ZoomOutIcon({
  color = "#292D32",
  customStyle,
  onClick,
}: IZoomOutIconProps) {
  return (
    <svg
      cursor={"pointer"}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...customStyle}
    >
      <path
        d="M8.5 11H13.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 2C15.97 2 20 6.03 20 11C20 15.97 15.97 20 11 20C6.03 20 2 15.97 2 11C2 7.5 4 4.46 6.93 2.97"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.071 20.97C19.601 22.57 20.811 22.73 21.741 21.33C22.601 20.05 22.041 19 20.501 19C19.351 19 18.711 19.89 19.071 20.97Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
