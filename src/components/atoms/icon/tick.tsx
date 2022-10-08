import * as React from "react";

export interface ITickIconProps {
  color?: string;
}

export function TickIcon({ color = "#53BA95" }: ITickIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66665 3.99992C1.83331 5.11325 1.33331 6.49992 1.33331 7.99992C1.33331 11.6799 4.31998 14.6666 7.99998 14.6666C11.68 14.6666 14.6666 11.6799 14.6666 7.99992C14.6666 4.31992 11.68 1.33325 7.99998 1.33325C7.04665 1.33325 6.13331 1.53325 5.31331 1.89992"
        stroke="#53BA95"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 6.92008L10.7467 6.16675"
        stroke="#53BA95"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.25336 8L7.08002 9.83333L8.78002 8.14"
        stroke="#53BA95"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
