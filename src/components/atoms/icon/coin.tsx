import * as React from "react";

export interface ICoinIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
  onClick?: () => void;
}

export function CoinIcon({
  color = "#4A65EF",
  customStyle,
  onClick,
}: ICoinIconProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...customStyle}
      onClick={onClick}
      cursor={"pointer"}
    >
      <path
        d="M12 17.1C12 18.255 12.9 19.2 13.995 19.2H16.245C17.205 19.2 17.985 18.375 17.985 17.37C17.985 16.275 17.505 15.885 16.8 15.63L13.2 14.37C12.48 14.115 12 13.725 12 12.63C12 11.625 12.78 10.8 13.74 10.8H15.99C17.1 10.815 18 11.745 18 12.9"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 19.275V20.385"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 9.61499V10.785"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.105 4.53C10.845 3.555 12.84 3 14.985 3C21.6 3 26.97 8.37 26.97 14.985C26.97 21.6 21.6 26.97 14.985 26.97C8.37 26.97 3 21.6 3 14.985C3 13.14 3.42 11.385 4.17 9.825"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.4702 29.82C20.8202 31.725 23.0252 32.97 25.5452 32.97C29.6402 32.97 32.9702 29.64 32.9702 25.545C32.9702 23.055 31.7402 20.85 29.8652 19.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
