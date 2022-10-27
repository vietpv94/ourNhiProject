import * as React from "react";
import { FormWrapper } from "./style";

export interface IFormProps {
  children: React.ReactNode;
}

export function Form({ children }: IFormProps) {
  return <FormWrapper>{children}</FormWrapper>;
}
