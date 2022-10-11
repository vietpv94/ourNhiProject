import { withModal } from "@Components/molecules/Modal";
import { StakeConFirmModal } from "@Components/molecules/Modal/components/StakeConfirm";
import { StakeSuccessful } from "@Components/molecules/Modal/components/StakeSuccessful";
import { breakpoints } from "@Utils/theme";
import * as React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useMedia } from "react-use";
import { Header } from "../../components/molecules/Header";
import { SideBar } from "./SideBar";
import { Flex, StakeWrapper } from "./style";

export interface IStakeProps {}

export function Stake(props: IStakeProps) {
  const { modal } = useSelector((state: any) => state.modal);
  const isMobile = useMedia(breakpoints.sm);
  return (
    <>
      <StakeWrapper>
        <Header />
        {isMobile && <SideBar />}
        <Flex>
          {!isMobile && <SideBar />}
          <Outlet />
        </Flex>
      </StakeWrapper>
      {modal === "stake-confirm" && withModal(StakeConFirmModal)}
      {modal === "stake-successful" && withModal(StakeSuccessful)}
    </>
  );
}
