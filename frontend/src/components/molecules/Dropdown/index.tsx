import { ArrowIcon } from "@Components/atoms/icon/arrow";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import React, { useRef } from "react";
import {
  Box,
  DropdownItem,
  DropdownList,
  DropdownWrapper,
  Label,
  Main
} from "./style";

export interface IDropdownProps {
  label: string;
  onSelect?: (data: IDropdownItem) => void;
  data: {
    id: number;
    name: string;
  }[];
}

export interface IDropdownItem {
  id: number;
  name: string;
}

export function Dropdown({ label, data, onSelect }: IDropdownProps) {
  const [selected, setSelected] = React.useState(data[0].name);
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const handleSelect = (data: IDropdownItem) => {
    setSelected(data.name);
    onSelect && onSelect(data);
  };
  return (
    <DropdownWrapper>
      <Label>{label}:</Label>
      <div></div>
      <Main ref={ref}>
        <Box
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>{selected}</span>
          <ArrowIcon
            customStyle={{
              height: "10",
              width: "10"
            }}
            style="outline"
          />
        </Box>
        {isOpen && (
          <DropdownList>
            {data.map((item) => {
              return (
                <DropdownItem
                  key={"dropdown-item-" + item.id}
                  onClick={() => {
                    handleSelect(item);
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
