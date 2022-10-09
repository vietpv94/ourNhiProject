import * as React from "react";

export interface ICloseIconProps {
  color?: string;
  customStyle?: React.CSSProperties;
}

export function CloseIcon({ color = "#FF476A", customStyle }: ICloseIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={customStyle}
    >
      <path
        d="M9.32666 6.67328L9.88666 6.11328"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.11328 9.88656L7.94661 8.05322"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.88661 9.88661L6.11328 6.11328"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66671 3.99992C1.83337 5.11325 1.33337 6.49992 1.33337 7.99992C1.33337 11.6799 4.32004 14.6666 8.00004 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00004 1.33325C7.04671 1.33325 6.13337 1.53325 5.31337 1.89992"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
