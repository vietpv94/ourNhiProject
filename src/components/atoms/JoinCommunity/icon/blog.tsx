import * as React from "react";

export interface IBlogIconProps {
  isHover?: boolean;
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
}

export function BlogIcon({ isHover, color, customStyle }: IBlogIconProps) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...customStyle}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34 17C34 26.3889 26.3889 34 17 34C7.61116 34 0 26.3889 0 17C0 7.61116 7.61116 0 17 0C26.3889 0 34 7.61116 34 17ZM21.5934 14.9115L17.0046 7.72727L12.4159 14.9115L17.0043 17.5864L21.5934 14.9115ZM17.0046 9.58676L13.8206 14.5717L17.0044 16.4278L20.1887 14.5717L17.0046 9.58676ZM11.6747 16.0623L16.9978 19.1655L16.998 19.1656L22.3222 16.0622L22.4677 16.2899C24.1072 18.8567 23.741 22.2183 21.5873 24.372C19.053 26.9063 14.944 26.9063 12.4097 24.372C10.256 22.2183 9.88983 18.8567 11.5293 16.2899L11.6747 16.0623Z"
        fill={color ? color : isHover ? "#fff" : "#7D899F"}
      />
    </svg>
  );
}
