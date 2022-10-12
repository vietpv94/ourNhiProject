import { InputImage } from "@Components/atoms/InputImage";
import React from "react";
import { Box, FileWrapper, Flex, InputWrapper } from "./style";

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
    <>
      {type !== "file" ? (
        <InputWrapper>
          <label>{label}</label>
          <div className="input">
            <input type={type} {...props} onChange={onChange} value={value} />
            {icon}
          </div>{" "}
          {children}
        </InputWrapper>
      ) : (
        <InputWrapper className="file">
          <label>{label}</label>
          <Flex>
            <InputImage id="card-font" text="Front side of ID Card" />
            <InputImage id="card-back" text="Back side of ID Card" />
          </Flex>
        </InputWrapper>
      )}
    </>
  );
};
