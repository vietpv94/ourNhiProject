import * as React from "react";

export interface IEditIconProps {
  color?: string;
  onClick?: (event?: MouseEvent) => void;
}

export function EditIcon({ color = "#33B5FF", onClick }: IEditIconProps) {
  return (
    <svg
      cursor={"pointer"}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6667 8.66675V10.0001C14.6667 13.3334 13.3334 14.6667 10 14.6667H6.00004C2.66671 14.6667 1.33337 13.3334 1.33337 10.0001V8.98675"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.33337 1.33325H6.00004C2.66671 1.33325 1.33337 2.66659 1.33337 5.99992"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2867 6.00659L13.9867 5.30659C14.8934 4.39992 15.32 3.34659 13.9867 2.01326C12.6534 0.679924 11.6 1.10659 10.6934 2.01326L5.44004 7.26659C5.24004 7.46659 5.04004 7.85992 5.00004 8.14659L4.71337 10.1533C4.60671 10.8799 5.12004 11.3866 5.84671 11.2866L7.85337 10.9999C8.13337 10.9599 8.52671 10.7599 8.73337 10.5599L10.8534 8.43992L11.34 7.95326"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.93994 2.7666C10.3866 4.35994 11.6333 5.6066 13.2333 6.05994"
        stroke={color}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
