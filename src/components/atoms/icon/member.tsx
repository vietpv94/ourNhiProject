import * as React from "react";

export interface IMemberIconProps {
  color?: string;
  customStyle?: React.SVGProps<SVGSVGElement>;
  style?: "default" | "small";
}

export function MemberIcon({
  color = "#4A65EF",
  customStyle,
  style = "default",
}: IMemberIconProps) {
  return (
    <>
      {style === "default" && (
        <svg
          width="42"
          height="45"
          viewBox="0 0 42 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...customStyle}
        >
          <path
            d="M16.0305 20.3616C15.8555 20.3433 15.6455 20.3433 15.453 20.3616C11.288 20.2151 7.98047 16.6444 7.98047 12.2497C7.98047 7.76348 11.4455 4.11954 15.7505 4.11954C20.038 4.11954 23.5205 7.76348 23.5205 12.2497C23.503 16.6444 20.1955 20.2151 16.0305 20.3616Z"
            stroke={color}
            stroke-width="2.625"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28.7172 7.78104C32.1122 7.78104 34.8422 10.6559 34.8422 14.19C34.8422 17.6508 32.2172 20.4707 28.9447 20.5989C28.8047 20.5806 28.6472 20.5806 28.4897 20.5989"
            stroke={color}
            stroke-width="2.625"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.28074 27.1177C3.04574 30.0841 3.04574 34.9183 7.28074 37.8664C12.0932 41.2357 19.9857 41.2357 24.7982 37.8664C29.0332 34.9 29.0332 30.0658 24.7982 27.1177C20.0032 23.7668 12.1107 23.7668 7.28074 27.1177Z"
            stroke={color}
            stroke-width="2.625"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.0947 37.0798C33.3547 36.8051 34.5447 36.2741 35.5247 35.4867C38.2547 33.3443 38.2547 29.8102 35.5247 27.6678C34.5622 26.8987 33.3897 26.386 32.1472 26.093"
            stroke={color}
            stroke-width="2.625"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {style === "small" && (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.65357 2.64C8.97357 3.11334 9.16023 3.68 9.16023 4.29334C9.15357 5.89334 7.89357 7.19334 6.3069 7.24667C6.24023 7.24 6.16023 7.24 6.0869 7.24667C4.50023 7.19334 3.24023 5.89334 3.24023 4.29334C3.24023 2.66 4.56023 1.33334 6.20023 1.33334"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.1404 2.66666C12.4337 2.66666 13.4737 3.71333 13.4737 5C13.4737 6.26 12.4737 7.28666 11.227 7.33333C11.1737 7.32666 11.1137 7.32666 11.0537 7.33333"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.97367 9.70666C1.36034 10.7867 1.36034 12.5467 2.97367 13.62C4.80701 14.8467 7.81367 14.8467 9.64701 13.62C11.2603 12.54 11.2603 10.78 9.64701 9.70666C7.82034 8.48666 4.81367 8.48666 2.97367 9.70666Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.4268 13.3333C12.9068 13.2333 13.3601 13.04 13.7334 12.7533C14.7734 11.9733 14.7734 10.6867 13.7334 9.90667C13.3668 9.62667 12.9201 9.44 12.4468 9.33334"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
}
