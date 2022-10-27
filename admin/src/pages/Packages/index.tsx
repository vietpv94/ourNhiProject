import { Dropdown } from "@Components/molecules/Dropdown";
import { Tab } from "@Components/molecules/Tab";
import { Table } from "@Components/molecules/Table";
import { AdminWrapper, Box, BoxPayout, BoxUsers, Title, Top } from "./style";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import userServices from "@Services/user";
import { CommonFilter } from "@Types/common";
import adminTransactionServices from "@Services/adminTransaction";
import adminKYCServices from "@Services/adminKYC";
import { Button } from "@Components/atoms/Button";
import { useNavigate } from "react-router-dom";
import adminBonusLevelServices from "@Services/adminBonusLevel";
import { IBonusLevel } from "@Models/bonusLevel";
import { IFullStakingPackage } from "@Models/index";
import adminPackageServices from "@Services/adminPackage";
export interface IHistoryProps {}

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

export function PackageManagement(props: IHistoryProps) {
  const tabs = ["Quản lý gói"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [totalPackage, setTotalPackage] = useState<number>(0);
  const [listPackage, setListPackage] = useState<IFullStakingPackage[]>([]);
  const navigate = useNavigate();
  const headerKycs = [
    "ID",
    "Thời hạn",
    "Giá trị",
    "Lợi nhuận tháng",
    "Ngày tạo",
    "Action"
  ];

  useEffect(() => {
    loadBonusRequest();
  }, []);

  const loadBonusRequest = async (param?: CommonFilter) => {
    const { data, totalRow } = await adminPackageServices.getPackage(param);

    setListPackage(data);
    setTotalPackage(totalRow);
  };

  const renderPackageData = useMemo(() => {
    if (!listPackage?.length) return [];
    return listPackage.map((item: IFullStakingPackage, index: number) => {
      return {
        id: item.id,
        duration: `${item.duration / (30 * 24 * 60 * 60)} months`,
        value: item.value,

        percentProfitPerMonth: item.percentProfitPerMonth,
        createdAt: moment(item.createdAt).format("YYYY-MM-DD HH:mm"),
        action: (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <Button
              text="Detail"
              type={"outline"}
              onClick={() => {
                navigate(`${item.id}`);
              }}
            />
          </div>
        )
      };
    });
  }, [listPackage]);

  const handleChangePage = async (page: number) => {
    await loadBonusRequest({ page: page });
  };

  return (
    <AdminWrapper>
      <Title>Quản lý gói</Title>
      <Top>
        <Tab
          parent="bonusManagement"
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className="left"></div>
      </Top>
      <BoxUsers>
        <Table
          header={headerKycs}
          data={renderPackageData}
          total={totalPackage}
          onMovePage={handleChangePage}
        />
      </BoxUsers>
    </AdminWrapper>
  );
}
