import * as React from "react";

export interface IEyeIconProps {
  type?: "slash" | "default";
  color?: string;
}

export function EyeIcon({
  color = "#33B5FF",
  type = "default",
}: IEyeIconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {type === "default" && (
        <>
          <path
            d="M6.01995 9.33328C5.75995 8.95328 5.61328 8.49328 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C9.31995 5.61328 10.3866 6.67995 10.3866 7.99995C10.3866 9.31995 9.31995 10.3866 7.99995 10.3866"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.7067 3.71991C10.58 2.91991 9.31335 2.48657 8.00002 2.48657C5.64668 2.48657 3.45335 3.87324 1.92668 6.27324C1.32668 7.21324 1.32668 8.79324 1.92668 9.73324C3.45335 12.1332 5.64668 13.5199 8.00002 13.5199C10.3534 13.5199 12.5467 12.1332 14.0734 9.73324C14.6734 8.79324 14.6734 7.21324 14.0734 6.27324"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {type === "slash" && (
        <>
          <path
            d="M9.68661 6.31328L6.31328 9.68661C5.87995 9.25328 5.61328 8.65995 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C8.65995 5.61328 9.25328 5.87995 9.68661 6.31328Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.73335 11.8399C3.06668 11.2666 2.46002 10.5599 1.92668 9.72659C1.32668 8.78659 1.32668 7.20659 1.92668 6.26659C2.71335 5.03325 3.67335 4.06659 4.74668 3.41992"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.88 3.84657C10.7133 2.96657 9.38 2.48657 8 2.48657"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.61328 13.02C6.37328 13.34 7.17995 13.5133 7.99995 13.5133C10.3533 13.5133 12.5466 12.1266 14.0733 9.72662C14.6733 8.78662 14.6733 7.20662 14.0733 6.26662C13.8533 5.91995 13.6133 5.59329 13.3666 5.28662"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.34 8.46655C10.1666 9.40655 9.39996 10.1732 8.45996 10.3466"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.31337 9.68677L1.33337 14.6668"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.6666 1.33325L9.68665 6.31325"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}
