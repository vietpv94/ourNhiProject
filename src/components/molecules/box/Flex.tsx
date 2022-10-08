import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  ${(props: any) =>
    props?.flexDirection && `flex-direction: ${props?.flexDirection}`};
  ${(props: any) =>
    props?.justifyContent && `justify-content: ${props?.justifyContent}`};
  ${(props: any) => props?.alignItems && `align-items: ${props?.alignItems}`};
  ${(props: any) => props?.gap && `gap: ${props?.gap}`};
`;

export const Flex = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  ...rest
}: any) => {
  return (
    <StyledFlex
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      gap={gap}
      {...rest}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;
