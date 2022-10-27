import * as React from "react";

export interface IResetIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
  onClick?: () => void;
}

export function ResetIcon({
  color = "#292D32",
  customStyle,
  onClick,
}: IResetIconProps) {
  return (
    <svg
      cursor={"pointer"}
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      version="1.1"
      height="24"
      width="24"
      viewBox="0 0 32 32"
      onClick={onClick}
      {...customStyle}
    >
      <path
        stroke={color}
        d="M20.852,6.744c3.074,1.756 5.15,5.126 5.15,8.986c0,5.664 -4.474,10.275 -10,10.275c-5.526,0 -10,-4.611 -10,-10.275c0,-4.566 2.906,-8.446 6.93,-9.781c0.524,-0.174 0.808,-0.74 0.635,-1.264c-0.174,-0.524 -0.74,-0.808 -1.264,-0.634c-4.81,1.595 -8.301,6.221 -8.301,11.679c0,6.782 5.384,12.275 12,12.275c6.616,0 12,-5.493 12,-12.275c0,-4.431 -2.3,-8.314 -5.74,-10.472l1.211,-0.324c0.533,-0.143 0.85,-0.692 0.707,-1.225c-0.143,-0.533 -0.691,-0.85 -1.224,-0.707l-3.864,1.035c-0.534,0.143 -0.85,0.692 -0.707,1.225l1.035,3.864c0.143,0.533 0.692,0.85 1.225,0.707c0.533,-0.143 0.85,-0.692 0.707,-1.225l-0.5,-1.864Z"
      />
    </svg>
  );
}
