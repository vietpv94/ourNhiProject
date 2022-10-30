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
import { IFullStakingPackage, IStakingLevelCondition } from "@Models/index";
import adminPackageServices from "@Services/adminPackage";
import adminLevelCondition from "@Services/adminLevelCondition";
export interface IPackageProps {}

export function LevelConditionManagement(props: IPackageProps) {
  const tabs = ["Quản Điều kiện lên cấp"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [totalLevelCondition, setTotalLevelCondition] = useState<number>(0);
  const [listLevelCondition, setListLevelCondition] = useState<
    IStakingLevelCondition[]
  >([]);
  const navigate = useNavigate();
  const headerKycs = ["ID", "Cấp độ", "Ngày tạo", "Action"];

  useEffect(() => {
    loadLevelConditionRequest();
  }, []);

  const loadLevelConditionRequest = async (param?: CommonFilter) => {
    const { data, totalRow } = await adminLevelCondition.getLevelCondition(
      param
    );

    setListLevelCondition(data);
    setTotalLevelCondition(totalRow);
  };

  const renderLevelConditionData = useMemo(() => {
    if (!listLevelCondition?.length) return [];
    return listLevelCondition.map(
      (item: IStakingLevelCondition, index: number) => {
        return {
          id: item.id,
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
      }
    );
  }, [listLevelCondition]);

  const handleChangePage = async (page: number) => {
    await loadLevelConditionRequest({ page: page });
  };

  return (
    <AdminWrapper>
      <Title>Quản lý Điều kiện lên cấp</Title>
      <Top>
        <Tab
          parent="packageManagement"
          tabs={tabs}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <div className="left">
          <Button
            text="Thêm Điều kiện"
            type={"outline"}
            onClick={() => {
              navigate("add");
            }}
          />
        </div>
      </Top>
      <BoxUsers>
        <Table
          header={headerKycs}
          data={renderLevelConditionData}
          total={totalLevelCondition}
          onMovePage={handleChangePage}
        />
      </BoxUsers>
    </AdminWrapper>
  );
}
