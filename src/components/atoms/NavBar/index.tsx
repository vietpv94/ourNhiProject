import { breakpoints } from "@Utils/theme";
import React from "react";
import { useDispatch } from "react-redux";
import { useMedia } from "react-use";
import { StyleConstants } from "@Styles/StyleConstants";
import styled from "styled-components";
import PageWrapper from "../PageWrapper";

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${(p) => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  .wallet-adapter-button {
    border: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: "DM Sans", "Roboto", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    font-size: 16px;
    font-weight: 600;
    height: 48px;
    line-height: 48px;
    padding: 0 24px;
    border-radius: 4px;
    &[disabled] {
      background: #404144;
      color: #999;
      cursor: not-allowed;
    }
    &-trigger {
      background-color: #512da8;
    }
  }

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
  }

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${breakpoints.sm} {
    width: 100%;
  }
`;
export function NavBar(): React.ReactElement {
  const isMobile = useMedia(breakpoints.sm);
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <PageWrapper>
      <Flex></Flex>
      {!isMobile ? (
        <Flex></Flex>
      ) : (
        <div onClick={() => setShowMenu(!showMenu)}>
          <svg
            width="25"
            height="23"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="4" width="21" height="3" rx="1.5" fill="white" />
            <rect x="2" y="10" width="21" height="3" rx="1.5" fill="white" />
            <rect x="2" y="16" width="21" height="3" rx="1.5" fill="white" />
          </svg>
        </div>
      )}
    </PageWrapper>
  );
}

export default NavBar;
