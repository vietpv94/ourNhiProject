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
import adminSystemConfigServices from "@Services/adminSystemConfig";
import { Button } from "@Components/atoms/Button";
import { useNavigate } from "react-router-dom";
export interface IHistoryProps {}

interface ISystemConfig {
  id: number;
  key: string;
  createdAt: string;
}

export function SystemConfigManagement(props: IHistoryProps) {
  const tabs = ["System Config Management"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [totalSystemConfig, setTotalSystemConfig] = useState<number>(0);
  const [systemConfig, setSystemConfig] = useState<ISystemConfig[]>([]);
  const navigate = useNavigate();
  const headerUsers = ["ID", "Key", "Action"];

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async (param?: CommonFilter) => {
    const { data, totalRow } = await adminSystemConfigServices.getSystemConfigs(
      param
    );
    setSystemConfig(data);
    setTotalSystemConfig(totalRow);
  };

  const renderDataUser = useMemo(() => {
    if (!systemConfig?.length) return [];
    return systemConfig.map((item: ISystemConfig, index: number) => {
      return {
        id: item.id,
        Key: item.key,
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
  }, [systemConfig]);

  const handleChangePage = async (page: number) => {
    await loadConfig({ page: page });
  };

  return (
    <AdminWrapper>
      <Title>Transaction Management</Title>
      <Top>
        <Tab
          parent="transactionManagement"
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className="left">
          <Dropdown label="time" data={dataSortTime} />
          <Dropdown label="sort by" data={dataSortBy} />
        </div>
      </Top>
      <BoxUsers>
        <Table
          header={headerUsers}
          data={renderDataUser}
          total={totalSystemConfig}
          onMovePage={handleChangePage}
        />
      </BoxUsers>
    </AdminWrapper>
  );
}
