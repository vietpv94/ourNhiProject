import { withModal } from "@Components/molecules/Modal";
import { StakeConFirmModal } from "@Components/molecules/Modal/components/StakeConfirm";
import { StakeSuccessful } from "@Components/molecules/Modal/components/StakeSuccessful";
import { RootState } from "@Redux/reducers";
import { breakpoints } from "@Utils/theme";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useMedia } from "react-use";
import { Header } from "@Components/molecules/Header";
import { SideBar } from "./SideBar";
import { Flex, StakeWrapper } from "./style";
import { UnstakedConFirmModal } from "@Components/molecules/Modal/components/UnstakeConfirm";
import { UnstackedSuccessful } from "@Components/molecules/Modal/components/UnstakeSuccessful";
import { Withdraw } from "@Components/molecules/Modal/components/Withdraw";
import { WithdrawSuccessful } from "@Components/molecules/Modal/components/Withdraw/successful";
import { Deposit } from "@Components/molecules/Modal/components/Deposit";
import { useMemo } from "react";
import { setModal } from "@Redux/actions/modal";

export interface IStakeProps {}

export function Stake(props: IStakeProps) {
  const { modal, data } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setModal({ modal: "", data: {} }));
  };

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
      {modal === "stake-confirm" &&
        withModal(() => {
          return <StakeConFirmModal selectedPack={data.selectedPack} />;
        }, handleClose)}
      {modal === "stake-successful" &&
        withModal(() => {
          return (
            <StakeSuccessful successStakingPack={data.successStakingPack} />
          );
        }, handleClose)}

      {modal === "unstake-confirm" &&
        withModal(() => {
          return <UnstakedConFirmModal selectedPack={data.selectedPack} />;
        }, handleClose)}

      {modal === "unstaked-successful" &&
        withModal(() => {
          return <UnstackedSuccessful unstakedPack={data.selectedPack} />;
        }, handleClose)}
      {modal === "withdraw" &&
        withModal(() => {
          return <Withdraw />;
        }, handleClose)}
      {modal === "withdraw-successful" &&
        withModal(() => {
          return <WithdrawSuccessful widthDrawData={data} />;
        }, handleClose)}
      {modal === "deposit" &&
        withModal(() => {
          return <Deposit />;
        }, handleClose)}
    </>
  );
}
