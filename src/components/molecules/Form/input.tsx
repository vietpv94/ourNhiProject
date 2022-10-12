import React from "react";
import { Box, FileWrapper, InputWrapper } from "./style";

type Props = {
  type: "password" | "number" | "email" | "text" | "file" | undefined;
  label?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (value: any) => void;
  [key: string]: HTMLInputElement | string | React.ReactNode;
};

export const Input = ({
  label,
  type,
  children,
  icon,
  placeholder,
  value,
  onChange,
  ...props
}: Props) => {
  return (
    <InputWrapper>
      <label>{label}</label>
      <div className="input">
        <input type={type} {...props} onChange={onChange} value={value} />
        {icon}
      </div>
      {children}
    </InputWrapper>
  );
};
