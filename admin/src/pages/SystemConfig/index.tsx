import { Dropdown } from "@Components/molecules/Dropdown";
import { Tab } from "@Components/molecules/Tab";
import { Table } from "@Components/molecules/Table";
import { dataSortBy, dataSortTime } from "./data";
import { AdminWrapper, BoxUsers, Title, Top } from "./style";
import { useEffect, useMemo, useState } from "react";
import { CommonFilter } from "@Types/common";
import adminSystemConfigServices from "@Services/adminSystemConfig";
import { Button } from "@Components/atoms/Button";
import { useNavigate } from "react-router-dom";
export interface IHistoryProps {}

interface ISystemConfig {
  id: number;
  key: string;
  value: string;
  isPublic: boolean;
  createdAt: string;
}

export function SystemConfigManagement(props: IHistoryProps) {
  const tabs = ["System Config Management"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [totalSystemConfig, setTotalSystemConfig] = useState<number>(0);
  const [systemConfig, setSystemConfig] = useState<ISystemConfig[]>([]);
  const navigate = useNavigate();
  const headerSystemConfigs = ["ID", "Key", "Value", "Is Public", "Action"];

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

  const renderDataSystemConfig = useMemo(() => {
    if (!systemConfig?.length) return [];
    return systemConfig.map((item: ISystemConfig, index: number) => {
      return {
        id: item.id,
        key: item.key,
        value: item?.value?.length > 20 ? item.value.slice(0, 20) + "..." : item.value,
        isPublic: (
          <div className={`status success`}>
            {item.isPublic ? "Public" : "Private"}
          </div>
        ),
        action: (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Button
              text="Detail"
              type={"outline"}
              onClick={() => {
                navigate(`${item.key}`);
              }}
            />
          </div>
        ),
      };
    });
  }, [systemConfig]);

  const handleChangePage = async (page: number) => {
    await loadConfig({ page: page });
  };

  return (
    <AdminWrapper>
      <Title>SystemConfig Management</Title>
      <Top>
        <Tab
          parent="transactionManagement"
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className="left">
        </div>
      </Top>
      <BoxUsers>
        <Table
          header={headerSystemConfigs}
          data={renderDataSystemConfig}
          total={totalSystemConfig}
          onMovePage={handleChangePage}
        />
      </BoxUsers>
    </AdminWrapper>
  );
}
