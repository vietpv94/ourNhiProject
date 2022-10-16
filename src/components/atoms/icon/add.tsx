import * as React from "react";

export interface IAddIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
  onClick?: () => void;
}

export function AddIcon({
  color = "#00A3FF",
  customStyle,
  onClick,
}: IAddIconProps) {
  return (
    <svg
      cursor={"pointer"}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...customStyle}
      onClick={onClick}
    >
      <path
        d="M12.5 22.8553C18 22.8553 22.5 18.3553 22.5 12.8553C22.5 7.35535 18 2.85535 12.5 2.85535C7 2.85535 2.5 7.35535 2.5 12.8553C2.5 18.3553 7 22.8553 12.5 22.8553Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12.8553H16.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 16.8553V8.85535"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
