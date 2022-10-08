import * as React from "react";
import styled from "styled-components";

export interface IArrowIconProps {
  color?: string;
  type: "up" | "down" | "left" | "right";
}

const Wrapper = styled.div<{ type: "up" | "down" | "left" | "right" }>`
  & > svg {
    transform: rotate(
      ${(props) =>
        props.type === "up"
          ? "0deg"
          : props.type === "down"
          ? "180deg"
          : props.type === "left"
          ? "270deg"
          : "90deg"}
    );
  }
`;

export function ArrowIcon({ color = "#00A3FF", type = "up" }: IArrowIconProps) {
  return (
    <Wrapper type={type}>
      <svg
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 9L0.0717964 0H13.9282L7 9Z" fill={color} />
      </svg>
    </Wrapper>
  );
}
