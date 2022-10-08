import * as React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { Flex, StakeWrapper } from "./style";

export interface IStakeProps {}

export function Stake(props: IStakeProps) {
  return (
    <StakeWrapper>
      <Header />
      <Flex>
        <SideBar />
        <Outlet />
      </Flex>
    </StakeWrapper>
  );
}
