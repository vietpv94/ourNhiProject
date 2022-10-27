import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Flex } from "@Components/molecules/Header/style";
import { Box, DetailWrapper, Input, InputWrapper } from "./style";
import { adminBonusLevelServices, adminKYCServices } from "@Services/index";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Button } from "@Components/atoms/Button";
import { IBonusLevel } from "@Models/bonusLevel";
export interface IKYCDetailProps {}

export function BonusDetail(props: IKYCDetailProps) {
  const param = useParams();
  const navigate = useNavigate();
  const [bonusRequest, setBonusRequest] = useState<IBonusLevel>();
  const loadDetailBonus = async () => {
    if (param.id) {
      const { data } = await adminBonusLevelServices.getBonusLevelById(
        Number(param.id)
      );
      setBonusRequest(data);
    }
  };

  useEffect(() => {
    loadDetailBonus();
  }, []);

  const rejectBonus = async (id: number) => {
    const { data, success, message } = await adminBonusLevelServices.rejectBonusLevel(
      id
    );
    if (!success) {
      toast.error(message);
    }

    toast.success("Thực hiện thành công");
    navigate("/admin/bonus");
  };
  const approveBonus = async (id: number) => {
    const { data, success, message } = await adminBonusLevelServices.approveBonusLevel(
      id
    );
    if (!success) {
      toast.error(message);
    }

    toast.success("Thực hiện thành công");
    navigate("/admin/bonus");
  };
  const convertStatus = (status: number): string => {
    switch (status) {
      case 0:
      case 3:
        return "failed";
      case 1:
        return "pending";
      case 2:
        return "success";
      default:
        return "failed";
    }
  };
  return bonusRequest ? (
    <DetailWrapper>
      <Input type="text" label="ID" value={bonusRequest.id.toString()} disabled />
      <InputWrapper>
        <label>Trạng Thái</label>
        <div className="input">
          <div className={`status ${convertStatus(bonusRequest.status)}`}>
            {convertStatus(bonusRequest.status)}
          </div>
        </div>
      </InputWrapper>

      <Input type="email" label="Email" value={bonusRequest.email} disabled />
      <Input
        type="text"
        label="Giá trị thưởng"
        value={bonusRequest.rewardValue.toString()}
        disabled
      />
      <Input
        type="text"
        label="Cấp độ"
        value={bonusRequest.level.toString()}
        disabled
      />

      <Input
        type="text"
        label="Ngày Tạo"
        value={bonusRequest.createdAt}
        disabled
      />
   
      {bonusRequest.status !== 2 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "200px"
          }}
        >
          <Button
            text="Approve"
            type={"blue"}
            onClick={() => {
              approveBonus(bonusRequest.id);
            }}
          />
          <Button
            text="Reject"
            type={"silver"}
            onClick={() => {
              rejectBonus(bonusRequest.id);
            }}
          />
        </div>
      )}
    </DetailWrapper>
  ) : null;
}
