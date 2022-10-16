import * as React from "react";

export interface IRankingIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
  onClick?: () => void;
}

export function RankingIcon({
  color = "#4A65EF",
  customStyle,
  onClick,
}: IRankingIconProps) {
  return (
    <svg
      cursor={"pointer"}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...customStyle}
    >
      <path
        d="M14.4506 23.3333H6.66732C4.83398 23.3333 3.33398 24.8333 3.33398 26.6666V36.6666H14.4506V23.3333Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.5503 20C25.5503 18.1666 24.0503 16.6666 22.2169 16.6666H17.7669C15.9336 16.6666 14.4336 18.1666 14.4336 20V36.6666H25.5503V26.6666"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.3322 28.3333H25.5488V36.6666H36.6655V31.6666C36.6655 29.8333 35.1655 28.3333 33.3322 28.3333Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8651 3.44995L21.7484 5.21661C21.8651 5.46661 22.1818 5.69994 22.4484 5.73327L24.0484 5.99995C25.0651 6.16661 25.3151 6.91658 24.5818 7.63325L23.3318 8.88325C23.1151 9.09991 22.9984 9.49993 23.0651 9.78326L23.4151 11.3166C23.6984 12.5333 23.0484 13 21.9818 12.3666L20.4818 11.4833C20.2151 11.3166 19.7651 11.3166 19.4984 11.4833L17.9984 12.3666C16.9318 13 16.2818 12.5333 16.5651 11.3166L16.9151 9.78326C16.9818 9.49993 16.8651 9.08325 16.6484 8.88325L15.4151 7.64993C14.6818 6.9166 14.9151 6.18325 15.9484 6.01658L17.5484 5.74996C17.8151 5.69996 18.1318 5.46663 18.2484 5.2333L19.1318 3.46658C19.6151 2.49991 20.3818 2.49995 20.8651 3.44995Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
