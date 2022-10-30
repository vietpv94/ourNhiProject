import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Flex } from "@Components/molecules/Header/style";
import { BackButton, Box, DetailWrapper, Input, InputWrapper } from "./style";
import { adminPackageServices } from "@Services/index";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@Components/atoms/Button";
import { IBonusLevel } from "@Models/bonusLevel";
import { IFullStakingPackage, IStakingPackage } from "@Models/package";
export interface IKYCDetailProps {}

export function PackageDetail(props: IKYCDetailProps) {
  const param = useParams();
  const navigate = useNavigate();
  const [packageDetail, setPackageDetail] = useState<IStakingPackage>();
  const loadDetailPackage = async () => {
    if (param.id) {
      const { data } = await adminPackageServices.getPackageById(
        Number(param.id)
      );
      setPackageDetail({
        duration: Number(data.duration),
        percentProfitPerMonth: Number(data.percentProfitPerMonth),
        percentProfitPerDay: Number(data.percentProfitPerDay),
        maxProfit: Number(data.maxProfit),
        poolMaxStakeValue: Number(data.poolMaxStakeValue),
      });
    }
  };

  useEffect(() => {
    loadDetailPackage();
  }, []);

  const updateUser = useCallback(async () => {
    console.log(packageDetail);

    if (packageDetail) {
      const { success, message } = await adminPackageServices.updatePackage(
        Number(param.id),
        packageDetail
      );
      if (!success) {
        toast.error(message);
      }

      toast.success("Thực hiện thành công");
      navigate("/admin/package");
    }
  }, [packageDetail]);

  return packageDetail ? (
    <DetailWrapper>
      <BackButton onClick={() => navigate("/admin/sys-conf")}>Back</BackButton>
      <Input
        type="number"
        label="Thời hạn (giây)"
        value={packageDetail.duration.toString()}
        onChange={(e) => {
          setPackageDetail({
            ...packageDetail,
            duration: Number(e.target.value),
          });
        }}
      />
      <Input
        type="number"
        label="Lợi Nhuận tháng"
        value={packageDetail.percentProfitPerMonth.toString()}
        onChange={(e) => {
          setPackageDetail({
            ...packageDetail,
            percentProfitPerMonth: Number(e.target.value),
          });
        }}
      />
      <Input
        type="number"
        label="Lợi Nhuận ngày"
        value={packageDetail.percentProfitPerDay.toString()}
        onChange={(e) => {
          setPackageDetail({
            ...packageDetail,
            percentProfitPerDay: Number(e.target.value),
          });
        }}
      />

      <Input
        type="number"
        label="Lợi Nhuận Tối Đa"
        value={packageDetail.maxProfit.toString()}
        onChange={(e) => {
          setPackageDetail({
            ...packageDetail,
            maxProfit: Number(e.target.value),
          });
        }}
      />

      <Input
        type="number"
        label="Tối Đa Tiền Gửi"
        value={packageDetail.poolMaxStakeValue.toString()}
        onChange={(e) => {
          setPackageDetail({
            ...packageDetail,
            poolMaxStakeValue: Number(e.target.value),
          });
        }}
      />

      <Button
        text="Update"
        type={"blue"}
        onClick={() => {
          updateUser();
        }}
      />
    </DetailWrapper>
  ) : null;
}
