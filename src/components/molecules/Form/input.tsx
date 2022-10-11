import React from "react";
import { Box, FileWrapper, InputWrapper } from "./style";

type Props = {
  type: "password" | "number" | "email" | "text" | "file" | undefined;
  label: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  [key: string]: HTMLInputElement | string | React.ReactNode;
};

export const Input = ({ label, type, children, icon, ...props }: Props) => {
  return (
    <InputWrapper>
      <label>{label}</label>
      <div className="input">
        <input type={type} {...props} />
        {icon}
      </div>
      {children}
    </InputWrapper>
  );
};
