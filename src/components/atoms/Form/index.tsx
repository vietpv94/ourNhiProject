import { breakpoints } from "@Utils/theme";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Form = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 32px;
  min-width: 440px;
  @media ${breakpoints.sm} {
    min-width: 100vw;
  }
  span {
    font-family: "SF Pro Display";
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #27272a;
  }
  .label {
    font-family: SF Pro Display;
    font-size: 14px;
    line-height: 20px;
    color: #27272a;
    margin-bottom: 8px;
  }
  & > div > .wrong-email-pass {
    font-family: SF Pro Display;
    color: #880404;
    visibility: hidden;
    font-size: 14px;
    &.active {
      visibility: visible;
    }
  }
`;
export const Heading = styled.div`
  font-family: SF Pro Display;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const Details = styled.div`
  font-family: SF Pro Display;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #7b7b7b;
  margin-bottom: 18px;
`;

export const Input = styled.div`
  background: #f8fafc;
  padding: 16px 20px;
  margin-bottom: 8px;
  cursor: text;
  border: 1px solid #dde2e8;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  position: relative;
  &:hover {
    border: 1px solid #00a3ff;
  }
  input {
    background: transparent;
    border: none;
    color: rgba(39, 39, 42, 0.5);
    width: 100%;
    font-family: SF Pro Display;
    font-size: 16px;
    line-height: 20px;
    &:focus {
      outline: none;
      border: none;
    }
  }
  .icon {
    position: absolute;
    right: 20px;
    top: 16px;
    cursor: pointer;
    display: flex;
    gap: 15px;
    font-family: SF Pro Display;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    color: #00a3ff;
    & > img {
      width: 24px;
      height: 24px;
    }
  }
  h3 {
    cursor: pointer;
    font-family: SF Pro Display;
    font-size: 14px;
    line-height: 20px;
    color: #9a9a9a;
  }
`;

export const Button = styled.button`
  width: 100%;
  text-align: center;
  padding: 12px 10px;
  margin: 20px 0;
  border: none;
  background: #00a3ff;
  border-radius: 4px;
  font-family: SF Pro Display;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  cursor: pointer;
  color: #fff;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #00a3ff;
  }
  a {
    color: #fff;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  gap: 8px;
`;
const Options = styled.div`
  position: absolute;
  background: #232323;
  border-radius: 4px;
  padding: 16px 20px;
  width: calc(100% + 2px);
  left: -1px;
  top: 100%;
  border: 1px solid #232323;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  height: 200px;
  overflow-y: scroll;
`;
const OptionsItem = styled.div`
  font-family: SF Pro Display;
  font-size: 14px;
  line-height: 20px;
  color: #9a9a9a;
  padding: 8px 0;
  margin-bottom: 8px;
`;
interface ISelected {
  name?: string;
  code?: string;
}
export interface ISelectProps {
  data?: ISelected[];
  selected?: ISelected;
  children?: React.ReactNode;
  handleSelected: ((data: ISelected) => void) | undefined;
}

export const Select: React.FC<ISelectProps> = ({
  children,
  data,
  selected,
  handleSelected = () => {}
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      setIsOpen(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <Input>
      <h3
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
      >
        {selected?.name} (+{selected?.code})
      </h3>
      {isOpen && (
        <Options>
          {data?.map((item, index) => (
            <OptionsItem
              key={index}
              onClick={() => {
                handleSelected(item);
                setIsOpen(false);
              }}
            >
              <h3>
                {item.name} (+{item.code})
              </h3>
            </OptionsItem>
          ))}
        </Options>
      )}
    </Input>
  );
};
