import * as React from "react";

export interface IClipboardIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
  onClick?: () => void;
}

export function ClipboardIcon({
  color = "#4A65EF",
  customStyle,
  onClick,
}: IClipboardIconProps) {
  return (
    <svg
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...customStyle}
      onClick={onClick}
      cursor={"pointer"}
    >
      <path
        d="M21.335 4.32C26.045 5.055 28.25 6.975 28.445 10.725C28.505 11.64 28.43 12.675 28.25 13.83L27.155 20.865C26.225 26.73 23.51 28.71 17.645 27.795L10.61 26.685C8.58499 26.37 7.02499 25.83 5.88499 25.02C3.70999 23.505 3.07999 21.015 3.67999 17.175L4.78999 10.14C5.71999 4.275 8.43499 2.295 14.3 3.21"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.2498 20.205L28.9998 26.97C27.1248 32.61 24.1248 34.11 18.4848 32.235L11.7198 29.985C8.31477 28.86 6.42477 27.3 5.88477 25.02C7.02477 25.83 8.58477 26.37 10.6098 26.685L17.6448 27.795C23.5098 28.71 26.2248 26.73 27.1548 20.865L28.2498 13.83C28.4298 12.675 28.5048 11.64 28.4448 10.725C32.0298 12.63 32.8098 15.51 31.2498 20.205Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.86 13.47C14.3015 13.47 15.47 12.3015 15.47 10.86C15.47 9.41854 14.3015 8.25 12.86 8.25C11.4185 8.25 10.25 9.41854 10.25 10.86C10.25 12.3015 11.4185 13.47 12.86 13.47Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
