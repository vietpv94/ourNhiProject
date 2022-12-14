import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useMedia } from "react-use";
import { breakpoints } from "@Utils/theme";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openSideBar } from "@Redux/actions/home";
import { RootState } from "@Redux/reducers";

export interface IHamburgerProps {}

function Path(props: any) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="black"
      strokeLinecap="round"
      {...props}
    />
  );
}

export const HamburgerWrapper = styled(motion.div)`
  position: relative;
  cursor: pointer;
  margin: auto 0;
`;

export function Hamburger(props: IHamburgerProps) {
  const isOpenSidebar = useSelector((state: RootState) => state.home.isOpenSidebar);
  const dispatch = useDispatch();
  const handleOpenSidebar = () => {
    dispatch(openSideBar(!isOpenSidebar));
  };
  return (
    <HamburgerWrapper
      onClick={handleOpenSidebar}
      animate={isOpenSidebar ? "open" : "closed"}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </HamburgerWrapper>
  );
}
