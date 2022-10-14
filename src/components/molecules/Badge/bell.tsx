import * as React from "react";

export interface IBellProps {
  color?: string;
  onClick?: () => void;
}

export function Bell({ color = "#00A3FF", onClick = () => {} }: IBellProps) {
  return (
    <svg
      cursor={"pointer"}
      onClick={onClick}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 4.29321V6.51321"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M13.7266 10.1133C14.2133 10.9266 13.8266 11.9799 12.9266 12.2799C9.73995 13.3399 6.29329 13.3399 3.10662 12.2799C2.14662 11.9599 1.77995 10.9866 2.30662 10.1133L3.15329 8.69992C3.38662 8.31325 3.57329 7.62659 3.57329 7.17992V5.77992C3.57329 3.31992 5.55996 1.33325 8.01329 1.33325C10.4533 1.33325 12.4533 3.33325 12.4533 5.77325V7.17325C12.4533 7.29325 12.4666 7.42659 12.4866 7.56659"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M10.22 12.5466C10.22 13.7666 9.22003 14.7666 8.00003 14.7666C7.39336 14.7666 6.83336 14.5133 6.43336 14.1133C6.03336 13.7133 5.78003 13.1533 5.78003 12.5466"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
