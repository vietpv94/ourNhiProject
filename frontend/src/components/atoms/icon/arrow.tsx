import * as React from "react";
import styled from "styled-components";

export interface IArrowIconProps {
  color?: string;
  type?: 'simple' | 'double';
  direction?: "up" | "down" | "left" | "right";
  style?: "outline" | "solid" | "default";
  customStyle?: React.SVGProps<SVGSVGElement>;
  onClick?: () => void;
}

const Wrapper = styled.div<{ direction: "up" | "down" | "left" | "right" }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    transform: rotate(
      ${(props) =>
        props.direction === "up"
          ? "180deg"
          : props.direction === "down"
          ? "0deg"
          : props.direction === "left"
          ? "270deg"
          : "90deg"}
    );
  }
`;

export function ArrowIcon({
  color = "#37373b",
  direction = "down",
  style = "default",
  type = "simple",
  customStyle,
  onClick,
}: IArrowIconProps) {
  return (
    <Wrapper direction={direction} onClick={onClick} className='arrow'>
      {type === "simple" ? (
        <>
          {" "}
          {style === "default" && (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/ svg"
              {...customStyle}
            >
              <path
                d="M10.9238 3.54298L10.9238 16.0993"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.1504 10.8675L10.9239 16.9712L4.69739 10.8675"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {style === "outline" && (
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...customStyle}
            >
              <path
                d="M16.92 1.00003L10.4 7.52003C9.62996 8.29003 8.36996 8.29003 7.59996 7.52003L1.07996 1.00003"
                stroke={color}
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {style === "solid" && (
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              {...customStyle}
            >
              <path
                d="M7.70776 6.71794L9.1962 5.2295L11.6215 2.80416C12.1278 2.29039 11.7651 1.41394 11.0398 1.41394L6.33265 1.41394L2.094 1.41394C1.3686 1.41394 1.006 2.29039 1.5198 2.80416L5.43354 6.71794C6.05309 7.34505 7.08065 7.34505 7.70776 6.71794Z"
                fill={color}
              />
            </svg>
          )}
        </>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...customStyle}
          cursor={onClick ? "pointer" : "default"}
          onClick={onClick}
        >
          <path
            d="M10.4498 6.71997L6.72974 3L3.00977 6.71997"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.73047 13.99L6.73047 3"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.73047 21V18.01"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.5488 17.28L17.2689 21L20.9888 17.28"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.2695 21V9.90997"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.2695 3V5.96997"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </Wrapper>
  );
}
