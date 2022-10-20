import * as React from "react";

export interface ITickIconProps {
  color?: string;
  status?: "tick" | "cross";
  type?: "circle" | "square";
  customStyle?: React.SVGProps<SVGSVGElement>;
}

export function TickIcon({
  color = "#53BA95",
  type = "circle",
  status = "tick",
  customStyle,
}: ITickIconProps) {
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
            d="M2.66665 3.99992C1.83331 5.11325 1.33331 6.49992 1.33331 7.99992C1.33331 11.6799 4.31998 14.6666 7.99998 14.6666C11.68 14.6666 14.6666 11.6799 14.6666 7.99992C14.6666 4.31992 11.68 1.33325 7.99998 1.33325C7.04665 1.33325 6.13331 1.53325 5.31331 1.89992"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {status === "tick" && (
            <>
              <path
                d="M10 6.91996L10.7467 6.16663"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.2533 8L7.07996 9.83333L8.77996 8.14"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
        </>
      ) : (
        <>
          <path
            d="M1.33337 8.64004V10C1.33337 13.3334 2.66671 14.6667 6.00004 14.6667H10C13.3334 14.6667 14.6667 13.3334 14.6667 10V6.00004C14.6667 2.66671 13.3334 1.33337 10 1.33337H6.00004C2.66671 1.33337 1.33337 2.66671 1.33337 6.00004"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {status === "tick" && (
            <>
              <path
                d="M10 6.91996L10.7467 6.16663"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.2533 8L7.07996 9.83333L8.77996 8.14"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          )}
        </>
      )}
    </svg>
  );
}
