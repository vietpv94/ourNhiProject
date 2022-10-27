import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Flex } from "@Components/molecules/Header/style";
import { Box, DetailWrapper, Input, InputWrapper } from "./style";
import {
  adminPackageServices,
  adminStakingLevelConditionServices
} from "@Services/index";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@Components/atoms/Button";
import { IBonusLevel } from "@Models/bonusLevel";
import { IFullStakingPackage, IStakingPackage } from "@Models/package";
import { IStakingLevelCondition } from "@Models/index";
export interface IKYCDetailProps {}

export function AddLevelCondition(props: IKYCDetailProps) {
  const navigate = useNavigate();
  const [levelConditionDetail, setLevelConditionDetail] =
    useState<IStakingLevelCondition>({
      level: 0,
      conditionInvest: 0,
      conditionNumF1: 0,
      conditionF1Level: 0,
      conditionRevenue: 0,
      maximumBinaryTreeIncome: 0,
      maxDeepReceiveSunCommission: 0,
      reward: 0
    });

  const addLevelCondition = useCallback(async () => {
    if (levelConditionDetail) {
      const { success, message } =
        await adminStakingLevelConditionServices.addLevelCondition(
          levelConditionDetail
        );
      if (!success) {
        toast.error(message);
      }

      toast.success("Thực hiện thành công");
      navigate("/admin/level-condition");
    }
  }, [levelConditionDetail]);

  return levelConditionDetail ? (
    <DetailWrapper>
      <Input
        type="number"
        label="Cấp độ"
        value={levelConditionDetail.level.toString()}
        onChange={(e) => {
          setLevelConditionDetail({
            ...levelConditionDetail,
            level: Number(e.target.value)
          });
        }}
      />
      <Input
        type="number"
        label="Tối thiểu đầu tư"
        value={levelConditionDetail.conditionInvest.toString()}
        onChange={(e) => {
          setLevelConditionDetail({
            ...levelConditionDetail,
            conditionInvest: Number(e.target.value)
          });
        }}
      />
      <Input
        type="number"
        label="Tối thiểu Số con F1"
        value={levelConditionDetail.conditionNumF1.toString()}
        onChange={(e) => {
          setLevelConditionDetail({
            ...levelConditionDetail,
            conditionNumF1: Number(e.target.value)
          });
        }}
      />

      <Input
        type="number"
        label="Cấp bậc F1 đạt"
        value={levelConditionDetail.conditionF1Level.toString()}
        onChange={(e) => {
          setLevelConditionDetail({
            ...levelConditionDetail,
            conditionF1Level: Number(e.target.value)
          });
        }}
      />

      <Input
        type="number"
        label="Điều kiện doanh số"
        value={levelConditionDetail.conditionRevenue.toString()}
        onChange={(e) => {
          setLevelConditionDetail({
            ...levelConditionDetail,
            conditionRevenue: Number(e.target.value)
          });
        }}
      />

      <Input
        type="number"
        label="Tối Đa doanh số có thể thu từ cấy nhị phân"
        value={levelConditionDetail.maximumBinaryTreeIncome.toString()}
        onChange={(e) => {
          setLevelConditionDetail({
            ...levelConditionDetail,
            maximumBinaryTreeIncome: Number(e.target.value)
          });
        }}
      />

      <Input
        type="number"
        label="Tối đa Số tầng có thể nhận hoa hồng"
        value={levelConditionDetail.maxDeepReceiveSunCommission.toString()}
        onChange={(e) => {
          setLevelConditionDetail({
            ...levelConditionDetail,
            maxDeepReceiveSunCommission: Number(e.target.value)
          });
        }}
      />

      <Input
        type="number"
        label="Thưởng lên cấp"
        value={levelConditionDetail.reward.toString()}
        onChange={(e) => {
          setLevelConditionDetail({
            ...levelConditionDetail,
            reward: Number(e.target.value)
          });
        }}
      />

      <Button
        text="Submit"
        type={"blue"}
        onClick={() => {
          addLevelCondition();
        }}
      />
    </DetailWrapper>
  ) : null;
}
