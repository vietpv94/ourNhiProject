import { breakpoints } from "@Utils/theme";
import React from "react";
import styled from "styled-components";

interface IStyle {
  [key: string]: any;
}

const VariantStyles: IStyle = {
  primary: {
    backgroundColor: "#00A3FF",
    color: "#ffffff",
    border: "1px solid #00A3FF",
    "&:hover": {
      backgroundColor: "#EF589D"
    },
    "&:active": {
      backgroundColor: "#CF2674"
    },
    "&:disabled": {
      backgroundColor: "#333333",
      color: "#9A9A9A",
      border: "1px solid #333333",
      cursor: "not-allowed"
    }
  },
  secondary: {
    backgroundColor: "transparent",
    color: "#00A3FF",
    border: "1px solid #00A3FF",
    "&:hover": {
      backgroundColor: "#FFE2EF"
    },
    "&:active": {
      backgroundColor: "#EDCADA"
    },
    "&:disabled": {
      color: "#9A9A9A",
      border: "1px solid #9A9A9A",
      cursor: "not-allowed"
    }
  },
  tertiary: {
    backgroundColor: "transparent",
    color: "#00A3FF",
    border: "1px solid transparent",
    "&:disabled": {
      color: "#9A9A9A",
      cursor: "not-allowed"
    }
  },
  cancel: {
    backgroundColor: "#2D2D2D",
    color: "#7B7B7B",
    border: "1px solid #7B7B7B"
  },
  disabled: {
    backgroundColor: "#333333",
    color: "#9A9A9A",
    border: "1px solid #333333",
    cursor: "not-allowed"
  }
};
const VariantSizes: IStyle = {
  fill: {
    width: "100%"
  },
  fit: {
    width: "fit-content"
  },
  fixed: {
    width: "220px"
  }
};

type ComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? JSX.LibraryManagedAttributes<T, P>
  : never;

type IBtnProps = {
  width: string;
  VariantStyles: string;
  VariantSizes: string;
};

const StyledButton = styled.button((props: IBtnProps) => {
  return {
    width: props.width,
    ...VariantStyles[props.VariantStyles],
    ...VariantSizes[props.VariantSizes],
    borderRadius: "4px",
    fontFamily: "Roboto",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.01em",
    cursor: "pointer",
    padding: "10px 16px",
    transition: "all 0.2s ease",
    ["@media" + breakpoints.sm]: {
      borderRadius: "4px"
    }
  };
});

export const Button = (props: IBtnProps) => {
  return <StyledButton {...props} />;
};

export default Button;
