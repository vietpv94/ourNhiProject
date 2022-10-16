import * as React from "react";

export interface IPersonIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
  onClick?: () => void;
}

export function PersonIcon({
  color = "#292D32",
  customStyle,
  onClick,
}: IPersonIconProps) {
  return (
    <svg
      cursor={"pointer"}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...customStyle}
    >
      <path
        d="M8.07917 8.51997C8.0325 8.5133 7.9725 8.5133 7.91917 8.51997C6.74583 8.47997 5.8125 7.51997 5.8125 6.33997C5.8125 5.13331 6.78583 4.15331 7.99917 4.15331C9.20583 4.15331 10.1858 5.13331 10.1858 6.33997C10.1792 7.51997 9.2525 8.47997 8.07917 8.51997Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4925 12.9201C11.3059 14.0067 9.73253 14.6667 7.99919 14.6667C6.26586 14.6667 4.69253 14.0067 3.50586 12.9201C3.57253 12.2934 3.97253 11.6801 4.68586 11.2001C6.51253 9.98672 9.49919 9.98672 11.3125 11.2001C12.0259 11.6801 12.4259 12.2934 12.4925 12.9201Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00065 14.6666C11.6825 14.6666 14.6673 11.6818 14.6673 7.99993C14.6673 4.31804 11.6825 1.33327 8.00065 1.33327C4.31875 1.33327 1.33398 4.31804 1.33398 7.99993C1.33398 11.6818 4.31875 14.6666 8.00065 14.6666Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
