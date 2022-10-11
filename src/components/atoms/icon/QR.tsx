import * as React from "react";

export interface IQRCodeProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
}

export function QRCodeIcon({ color = "#00A3FF", customStyle }: IQRCodeProps) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...customStyle}
    >
      <path
        d="M4.31641 4H8.32641V2H2.31641V8H4.31641V4ZM4.31641 16H2.31641V22H8.32641V20H4.31641V16ZM20.3164 20H16.3164V22H22.3164V16H20.3164V20ZM16.3164 4H20.3164V8H22.3164V2H16.3164V4Z"
        fill={color}
      />
      <path
        d="M5.31641 11H11.3164V5H5.31641V11ZM7.31641 7H9.31641V9H7.31641V7ZM5.31641 19H11.3164V13H5.31641V19ZM7.31641 15H9.31641V17H7.31641V15ZM19.3164 5H13.3164V11H19.3164V5ZM17.3164 9H15.3164V7H17.3164V9ZM13.3264 13H15.3264V15H13.3264V13ZM15.3264 15H17.3264V17H15.3264V15ZM17.3264 17H19.3264V19H17.3264V17ZM17.3264 13H19.3264V15H17.3264V13Z"
        fill={color}
      />
    </svg>
  );
}
