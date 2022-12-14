import { Dropdown } from "@Components/molecules/Dropdown";
import { Tab } from "@Components/molecules/Tab";
import { Table } from "@Components/molecules/Table";
import { dataSortBy, dataSortTime } from "./data";
import { AdminWrapper, Box, BoxPayout, BoxUsers, Title, Top } from "./style";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";
import userServices from "@Services/user";
import { CommonFilter } from "@Types/common";
import adminTransactionServices from "@Services/adminTransaction";
import adminKYCServices from "@Services/adminKYC";
import { Button } from "@Components/atoms/Button";
import { useNavigate } from "react-router-dom";
export interface IHistoryProps {}

export interface IKyc {
  id: number;
  status: number;
  fullName: string;
  fullAddress: string;
  phone: string;
  dateOfBirth: string;
  frontUrl: string;
  backUrl: string;
  userId: number;
  email: string;
  createdAt: string;
}

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

export function KycManagement(props: IHistoryProps) {
  const tabs = ["kycManagement"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [totalKycRequest, setTotalKycRequest] = useState<number>(0);
  const [listKycRequest, setListKycRequest] = useState<IKyc[]>([]);
  const navigate = useNavigate();
  const headerKycs = [
    "ID",
    "Email",
    "Full Name",
    "Status",
    "Requested Date",
    "Action"
  ];

  useEffect(() => {
    loadKycRequest();
  }, []);

  const loadKycRequest = async (param?: CommonFilter) => {
    const { data, totalRow } = await adminKYCServices.getKycRequest(param);
    setListKycRequest(data);
    setTotalKycRequest(totalRow);
  };

  const renderKycData = useMemo(() => {
    if (!listKycRequest?.length) return [];
    return listKycRequest.map((item: IKyc, index: number) => {
      return {
        id: item.userId,
        email: <div className="walletAddress">{item.email}</div>,
        fullName: item.fullName,
        status: (
          <div className={`status ${convertStatus(item.status)}`}>
            {convertStatus(item.status)}
          </div>
        ),
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
  }, [listKycRequest]);

  const handleChangePage = async (page: number) => {
    await loadKycRequest({ page: page });
  };

  return (
    <AdminWrapper>
      <Title>Kyc Management</Title>
      <Top>
        <Tab
          parent="kycManagement"
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className="left">
        </div>
      </Top>
      <BoxUsers>
        <Table
          header={headerKycs}
          data={renderKycData}
          total={totalKycRequest}
          onMovePage={handleChangePage}
        />
      </BoxUsers>
    </AdminWrapper>
  );
}
