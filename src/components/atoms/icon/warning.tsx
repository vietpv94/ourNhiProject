import * as React from "react";

export interface IWarningIconProps {
  color?: string;
  type?: "circle" | "triangle";
  customStyle?: React.SVGProps<SVGSVGElement>;
}

export function WarningIcon({
  color = "#F5B800",
  type = "circle",
  customStyle,
}: IWarningIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...customStyle}
    >
      {type === "circle" ? (
        <>
          <path
            d="M8 5.33325V8.66659"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.66665 3.99992C1.83331 5.11325 1.33331 6.49992 1.33331 7.99992C1.33331 11.6799 4.31998 14.6666 7.99998 14.6666C11.68 14.6666 14.6666 11.6799 14.6666 7.99992C14.6666 4.31992 11.68 1.33325 7.99998 1.33325C7.04665 1.33325 6.13331 1.53325 5.31331 1.89992"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.99634 10.6667H8.00233"
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      ) : (
        <>
          <path
            d="M12 9V14"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.2401 14L21.3001 15.9C22.9801 18.93 21.5201 21.41 18.0601 21.41H12.0001H5.94005C2.47005 21.41 1.02005 18.93 2.70005 15.9L5.82006 10.28L8.76006 5C10.5401 1.79 13.4601 1.79 15.2401 5L18.1801 10.29"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.9945 17H12.0035"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      )}
    </svg>
  );
}
