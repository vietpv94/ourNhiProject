import * as React from "react";

export interface IWalletMoneyProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
  onClick?: () => void;
}

export function WalletMoney({
  color = "#4A65EF",
  customStyle,
  onClick,
}: IWalletMoneyProps) {
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
        d="M16.1249 25.29V28.335C16.1249 30.915 13.7249 33 10.7699 33C7.81493 33 5.3999 30.915 5.3999 28.335V25.29C5.3999 27.87 7.79993 29.7 10.7699 29.7C13.7249 29.7 16.1249 27.855 16.1249 25.29Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.1252 21.165C16.1252 21.915 15.9152 22.605 15.5552 23.205C14.6702 24.66 12.8552 25.575 10.7552 25.575C8.65519 25.575 6.84017 24.645 5.95517 23.205C5.59517 22.605 5.38525 21.915 5.38525 21.165C5.38525 19.875 5.98522 18.72 6.94522 17.88C7.92022 17.025 9.25517 16.515 10.7402 16.515C12.2252 16.515 13.5602 17.04 14.5352 17.88C15.5252 18.705 16.1252 19.875 16.1252 21.165Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.1249 21.165V25.29C16.1249 27.87 13.7249 29.7 10.7699 29.7C7.81493 29.7 5.3999 27.855 5.3999 25.29V21.165C5.3999 18.585 7.79993 16.5 10.7699 16.5C12.2549 16.5 13.59 17.025 14.565 17.865C15.525 18.705 16.1249 19.875 16.1249 21.165Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.9998 16.455V19.545C32.9998 20.37 32.3398 21.045 31.4998 21.075H28.5598C26.9398 21.075 25.4548 19.89 25.3198 18.27C25.2298 17.325 25.5898 16.44 26.2198 15.825C26.7748 15.255 27.5398 14.925 28.3798 14.925H31.4998C32.3398 14.955 32.9998 15.63 32.9998 16.455Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24 5.25C24.39 5.25 24.765 5.26498 25.125 5.32498C28.995 5.77498 31.5 8.64 31.5 12.75V14.925H28.38C27.54 14.925 26.775 15.255 26.22 15.825C25.59 16.44 25.23 17.325 25.32 18.27C25.455 19.89 26.94 21.075 28.56 21.075H31.5V23.25C31.5 27.75 28.5 30.75 24 30.75H20.25"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 15.75V12.75C3 8.67 5.46 5.82 9.285 5.34C9.675 5.28 10.08 5.25 10.5 5.25H18"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
