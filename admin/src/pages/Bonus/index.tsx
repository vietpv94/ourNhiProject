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

export function BonusManagement(props: IHistoryProps) {
  const tabs = ["Thưởng lên cấp"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [totalBonusRequest, setTotalBonusRequest] = useState<number>(0);
  const [listBonusRequest, setListBonusRequest] = useState<IBonusLevel[]>([]);
  const navigate = useNavigate();
  const headerKycs = [
    "ID",
    "Email",
    "Trạng Thái",
    "Giá trị",
    "Cấp",
    "Requested Date",
    "Action"
  ];

  useEffect(() => {
    loadBonusRequest();
  }, []);

  const loadBonusRequest = async (param?: CommonFilter) => {
    const { data, totalRow } = await adminBonusLevelServices.getBonusLevel(
      param
    );

    setListBonusRequest(data);
    setTotalBonusRequest(totalRow);
  };

  const renderKycData = useMemo(() => {
    if (!listBonusRequest?.length) return [];
    return listBonusRequest.map((item: IBonusLevel, index: number) => {
      return {
        id: item.userId,
        email: <div className="walletAddress">{item.email}</div>,
        status: (
          <div className={`status ${convertStatus(item.status)}`}>
            {convertStatus(item.status)}
          </div>
        ),
        rewardValue: item.rewardValue,
        level: item.level,
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
  }, [listBonusRequest]);

  const handleChangePage = async (page: number) => {
    await loadBonusRequest({ page: page });
  };

  return (
    <AdminWrapper>
      <Title>Thưởng lên cấp</Title>
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
          data={renderKycData}
          total={totalBonusRequest}
          onMovePage={handleChangePage}
        />
      </BoxUsers>
    </AdminWrapper>
  );
}
