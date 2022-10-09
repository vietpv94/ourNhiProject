import { ArrowIcon } from "@Components/atoms/icon/arrow";
import * as React from "react";
import {
  Box,
  DropdownItem,
  DropdownList,
  DropdownWrapper,
  Label,
  Main,
} from "./style";

export interface IDropdownProps {
  label: string;
  data: {
    id: number;
    name: string;
  }[];
}

export function Dropdown({ label, data }: IDropdownProps) {
  const [selected, setSelected] = React.useState(data[0].name);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <DropdownWrapper>
      <Label>{label}:</Label>
      <div></div>
      <Main>
        <Box
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>{selected}</span>
          <ArrowIcon
            customStyle={{
              height: "10",
              width: "10",
            }}
            style="outline"
          />
        </Box>
        {isOpen && (
          <DropdownList>
            {data.map((item) => {
              return (
                <DropdownItem
                  key={item.id}
                  onClick={() => {
                    setSelected(item.name);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </DropdownItem>
              );
            })}
          </DropdownList>
        )}
      </Main>
    </DropdownWrapper>
  );
}
