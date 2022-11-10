import { StyledComponent } from "styled-components";
import { ButtonWrapper } from "./style";

export interface IButtonProps {
  className?: string;
  type: "silver" | "blue" | "outline" | "disabledBlue" | 'darkSilver';
  text?: string;
  onClick?: () => void;
  customStyle?: string;
  children?: React.ReactNode;
  [props: string]: any;
}

const background = {
  darkSilver: {
    backgroundColor: "rgb(39, 56, 82)",
    color: "#ffffff"
  },
  silver: {
    backgroundColor: "#C1CBD7",
    color: "#ffffff"
  },
  blue: {
    backgroundColor: "rgb(0, 163, 255)",
    color: "#ffffff"
  },
  disabledBlue: {
    backgroundColor: "#99DAFF",
    color: "#ffffff",
    cursor: "not-allowed"
  },
  outline: {
    backgroundColor: "transparent",
    color: "rgb(39, 56, 82)",
    border: "1px solid rgb(39, 56, 82)"
  }
};
export function Button({
  type,
  text,
  className,
  customStyle,
  onClick,
  children,
  ...props
}: IButtonProps) {
  return (
    <ButtonWrapper
      style={{ ...background[type], ...props }}
      className={className}
      onClick={() => onClick && onClick()}
      customStyle={customStyle}
    >
      {children || text}
    </ButtonWrapper>
  );
}
