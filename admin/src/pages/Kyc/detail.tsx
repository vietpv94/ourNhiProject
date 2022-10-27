import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Flex } from "@Components/molecules/Header/style";
import { Box, DetailWrapper, Input, InputWrapper } from "./style";
import { adminKYCServices } from "@Services/index";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { IKyc } from ".";
import { Button } from "@Components/atoms/Button";
export interface IKYCDetailProps {}

export function KYCDetail(props: IKYCDetailProps) {
  const param = useParams();
  const navigate = useNavigate();
  const [kycRequest, setKycRequest] = useState<IKyc>();
  const loadDetailKYC = async () => {
    if (param.id) {
      const { data } = await adminKYCServices.getKycRequestById(
        Number(param.id)
      );
      setKycRequest(data);
    }
  };

  useEffect(() => {
    loadDetailKYC();
  }, []);

  const rejectKyc = async (id: number) => {
    const { data, success, message } = await adminKYCServices.rejectKycRequest(
      id
    );
    if (!success) {
      toast.error(message);
    }

    toast.success("Thực hiện thành công");
    navigate("/admin/kyc");
  };
  const approveKyc = async (id: number) => {
    const { data, success, message } = await adminKYCServices.approveKycRequest(
      id
    );
    if (!success) {
      toast.error(message);
    }

    toast.success("Thực hiện thành công");
    navigate("/admin/kyc");
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
  return kycRequest ? (
    <DetailWrapper>
      <Input type="text" label="ID" value={kycRequest.id.toString()} disabled />
      <InputWrapper>
        <label>Trạng Thái</label>
        <div className="input">
          <div className={`status ${convertStatus(kycRequest.status)}`}>
            {convertStatus(kycRequest.status)}
          </div>
        </div>
      </InputWrapper>

      <Input type="email" label="Email" value={kycRequest.email} disabled />
      <Input
        type="text"
        label="Họ và tên"
        value={kycRequest.fullName}
        disabled
      />
      <Input
        type="text"
        label="Địa chỉ"
        value={kycRequest.fullAddress}
        disabled
      />
      <Input
        type="text"
        label="Số điện thoại"
        value={kycRequest.phone}
        disabled
      />
      <Input
        type="text"
        label="Ngày sinh"
        value={kycRequest.dateOfBirth}
        disabled
      />
      <Input
        type="text"
        label="Ngày Tạo"
        value={kycRequest.createdAt}
        disabled
      />
      <label>Mặt Trước Căn Cước</label>
      <Box className={"active"}>
        <img className="preview-image" src={kycRequest.frontUrl} />
      </Box>
      <label>Mặt Sau Căn Cước</label>
      <Box className={"active"}>
        <img className="preview-image" src={kycRequest.backUrl} />
      </Box>
      {kycRequest.status !== 2 && (
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
              approveKyc(kycRequest.id);
            }}
          />
          <Button
            text="Reject"
            type={"silver"}
            onClick={() => {
              rejectKyc(kycRequest.id);
            }}
          />
        </div>
      )}
    </DetailWrapper>
  ) : null;
}
