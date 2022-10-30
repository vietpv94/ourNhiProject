import { ArrowIcon } from "@Components/atoms/icon/arrow";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import React, { useRef } from "react";
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
  onChange?: (value?: any) => void;
}

export function Dropdown({ label, data, onChange }: IDropdownProps) {
  const [selected, setSelected] = React.useState(data[0].name);
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const onClickItem = (item: any) => {
    setSelected(item.name);
    setIsOpen(false);

    if (onChange) {
      onChange(item);
    }
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
                  key={"dropdown-item-" + item.id}
                  onClick={() => {
                    onClickItem(item);
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
