import * as React from "react";

export interface IPresentIconProps {
  color?: string;
}

export function PresentIcon({ color = "#292D32" }: IPresentIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.96875 18C3.96875 21 4.96875 22 7.96875 22H15.9688C18.9688 22 19.9687 21 19.9687 18V10H3.96875V13.84"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6388 5H6.11881C5.77881 4.63 5.78881 4.06 6.14881 3.7L7.56881 2.28C7.93881 1.91 8.54881 1.91 8.91881 2.28L11.6388 5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8716 5H12.3516L15.0716 2.28C15.4416 1.91 16.0516 1.91 16.4216 2.28L17.8416 3.7C18.2016 4.06 18.2116 4.63 17.8716 5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.94141 10V15.14C8.94141 15.94 9.82141 16.41 10.4914 15.98L11.4314 15.36C11.7714 15.14 12.2014 15.14 12.5314 15.36L13.4214 15.96C14.0814 16.4 14.9714 15.93 14.9714 15.13V10H8.94141Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
