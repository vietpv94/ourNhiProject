import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Flex } from "@Components/molecules/Header/style";
import { Dropdown } from "@Components/molecules/Dropdown";

import { BackButton, Box, DetailWrapper, Input, InputWrapper } from "./style";
import { adminSystemConfigServices } from "@Services/index";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@Components/atoms/Button";
import { ISystemConfig } from "@Models/systemConfig";

export interface ISystemConfigDetailProps {}

export function SystemConfigDetail(props: ISystemConfigDetailProps) {
  const param = useParams();
  const navigate = useNavigate();
  const [systemConfigDetail, setSystemConfigDetail] = useState<ISystemConfig>();

  const loadDetailPackage = async () => {
    if (param.id) {
      const { data } = await adminSystemConfigServices.getSystemConfigByKey(
        param.id
      );

      setSystemConfigDetail(data);
    }
  };

  useEffect(() => {
    loadDetailPackage();
  }, []);

  const updateSystemConfig = useCallback(async () => {
    if (systemConfigDetail) {
      const { success, message } =
        await adminSystemConfigServices.updateSystemConfig({
          key: systemConfigDetail.key,
          value: systemConfigDetail.value,
          isPublic: systemConfigDetail.isPublic,
        });
      if (!success) {
        toast.error(message);
      }

      toast.success("Thực hiện thành công");
      navigate("/admin/sys-conf");
    }
  }, [systemConfigDetail]);

  return systemConfigDetail ? (
    <DetailWrapper>
      <BackButton onClick={() => navigate("/admin/sys-conf")}>Back</BackButton>
      <Input
        type="text"
        label="Cấu hình"
        value={systemConfigDetail.key}
        readOnly
      />
      <Input
        type="text"
        label="Giá trị"
        value={systemConfigDetail.value}
        onChange={(e) => {
          setSystemConfigDetail({
            ...systemConfigDetail,
            value: e.target.value,
          });
        }}
      />

      <Dropdown
        label="Công khai"
        data={[
          { id: 1, name: "Công khai" },
          { id: 0, name: "Không công khai" },
        ]}
        onChange={(a) =>
          setSystemConfigDetail({
            ...systemConfigDetail,
            isPublic: Boolean(a.id),
          })
        }
      />

      <Button
        text="Update"
        type={"blue"}
        onClick={() => {
          updateSystemConfig();
        }}
      />
    </DetailWrapper>
  ) : null;
}
