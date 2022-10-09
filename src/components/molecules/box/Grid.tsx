import { DOMAttributes } from "react";
import styled from "styled-components";
import { CSSProp } from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  ${(props: any) =>
    props?.columns && `grid-template-columns: repeat(${props?.columns}, 1fr)`};
  ${(props: any) =>
    props?.rows && `grid-template-rows: repeat(${props?.rows}, 1fr)`};
  ${(props: any) => props?.gap && `grid-gap: ${props?.gap}px`};
`;

export const Grid = ({ children, columns, rows, gap, ...rest }: any) => {
  return (
    <StyledGrid columns={columns} rows={rows} gap={gap} {...rest}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
