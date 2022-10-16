import { Checkbox } from "@Components/atoms/Form";
import { breakpoints } from "@Utils/theme";
import styled from "styled-components";

export const Options = styled.div`
  display: grid;
  gap: 56px;
  @media ${breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  background: #171717;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 340px;
  min-height: 340px;
  padding: 36px;
  img {
    margin-bottom: 24px;
  }
  h3 {
    font-family: SF Pro Display;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    margin-bottom: 16px;
  }
  p {
    font-family: SF Pro Display;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    margin-bottom: 16px;
  }
  @media ${breakpoints.sm} {
    min-width: 280px;
    min-height: 255px;
    padding: 16px 20px;
    img {
      margin-bottom: 11px;
    }
    h3 {
      font-size: 20px;
      line-height: 23px;
    }
    p {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;
export const StyledCheckbox = styled(Checkbox)`
  margin-top: 16px;
  img {
    width: 24px;
    height: 24px;
    &:hover {
      cursor: pointer;
    }
  }
  .content {
    font-family: SF Pro Display;
    font-size: 11px;
    line-height: 15px;
    color: #7b7b7b;
  }
`;
export const Social = styled.div`
  padding: 36px 0px;
  display: flex;
  gap: 34px;
  img {
    cursor: pointer;
  }
`;
export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  @media ${breakpoints.sm} {
    grid-template-columns: 1fr;
    width: 100%;
    button {
      width: 100%;
      border-radius: 4px;
    }
  }
`;
