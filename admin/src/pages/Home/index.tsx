import { HomeWrapper, Flex } from "./style";
import React from "react";
import { Header } from "@Components/molecules/Header";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";

interface Props {}

export function HomePage(): React.ReactElement {
  return (
    <HomeWrapper>
      <Header />
      <Flex>
        <SideBar />
        <Outlet />
      </Flex>
    </HomeWrapper>
  );
}
export default HomePage;
