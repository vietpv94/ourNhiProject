import styled from "styled-components";

export const ButtonWrapper = styled.div<{customStyle?: string}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 16px 25px;
  width: max-content;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  min-width: max-content;
  ${(props) => props.customStyle && props.customStyle}
  & > .disabled {
    color: rgba(207, 229, 255, 0.5);
  }
`;
