import { Header } from "@Components/molecules/Header";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { ProfileWrapper } from "./style";

export interface IProfileProps {}

export function Profile(props: IProfileProps) {
  return (
    <ProfileWrapper>
      <div className="mask"></div>
      <Header />
      <Outlet />
    </ProfileWrapper>
  );
}
