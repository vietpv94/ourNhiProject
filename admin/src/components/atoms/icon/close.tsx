import * as React from "react";

export interface ICloseIconProps {
  color?: string;
  customStyle?: React.CSSProperties;
  type?: "default" | "outline";
  onClick?: () => void;
}

export function CloseIcon({
  color = "#FF476A",
  customStyle,
  type = "default",
  onClick,
}: ICloseIconProps) {
  if (type === "default") {
    return (
      <svg
        onClick={onClick}
        cursor={"pointer"}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={customStyle}
      >
        <path
          d="M8.99935 0.666626C4.40768 0.666626 0.666016 4.40829 0.666016 8.99996C0.666016 13.5916 4.40768 17.3333 8.99935 17.3333C13.591 17.3333 17.3327 13.5916 17.3327 8.99996C17.3327 4.40829 13.591 0.666626 8.99935 0.666626ZM11.7993 10.9166C12.041 11.1583 12.041 11.5583 11.7993 11.8C11.6743 11.925 11.516 11.9833 11.3577 11.9833C11.1993 11.9833 11.041 11.925 10.916 11.8L8.99935 9.88329L7.08268 11.8C6.95768 11.925 6.79935 11.9833 6.64102 11.9833C6.48268 11.9833 6.32435 11.925 6.19935 11.8C5.95768 11.5583 5.95768 11.1583 6.19935 10.9166L8.11601 8.99996L6.19935 7.08329C5.95768 6.84163 5.95768 6.44163 6.19935 6.19996C6.44102 5.95829 6.84102 5.95829 7.08268 6.19996L8.99935 8.11663L10.916 6.19996C11.1577 5.95829 11.5577 5.95829 11.7993 6.19996C12.041 6.44163 12.041 6.84163 11.7993 7.08329L9.88268 8.99996L11.7993 10.9166Z"
          fill={color}
        />
      </svg>
    );
  }
  return (
    <svg
      onClick={onClick}
      cursor={"pointer"}
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
