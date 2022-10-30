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
import sol from "@Assets/images/molecules/card/sol-token.png";
import tether from "@Assets/images/tether.png";
import { Logo } from "@Pages/StakingSession/style";
import { Button } from "@Components/atoms/Button";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loading, unloading } from "@Redux/actions/loading";
export interface IHistoryProps {}

interface ITransactionData {
  id: number;
  type: number;
  userId: number;
  status: number;
  amount: number;
  currency: number;
  txId: string;
  ata: string;
  mint: string;
  createdAt: string;
  confirmedAt: string;
  email: string;
}

const convertStatus = (status: number): string => {
  switch (status) {
    case 3:
      return "rejected";
    case 1:
      return "pending";
    case 2:
      return "success";
    case 4:
      return "failed";
    default:
      return "failed";
  }
};

export function TransactionManagement(props: IHistoryProps) {
  const tabs = ["Quản lý yêu cầu rút tiền"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [totalTransaction, setTotalTransaction] = useState<number>(0);
  const [listTransaction, setListTransaction] = useState<ITransactionData[]>(
    []
  );
  const dispatch = useDispatch();
  const headerUsers = [
    "ID",
    "Email",
    "Số lượng",
    "Loại Coin",
    "Trạng Thái",
    "Ngày Tạo",
    "Hành Động"
  ];

  useEffect(() => {
    loadTransaction({ type: 2, status: 1 });
  }, []);

  const loadTransaction = async (param?: CommonFilter) => {
    const { data, totalRow } =
      await adminTransactionServices.getListTransaction(param);
    console.log(data);

    setTotalTransaction(totalRow);
    setListTransaction(data);
  };
  const approve = async (id: number) => {
    dispatch(loading());
    const { data, message } = await adminTransactionServices.approveTransaction(
      id
    );
    if (data) {
      loadTransaction({ type: 2, status: 1 });
      dispatch(unloading());
      return toast.success("Thực hiện thành công!");
    }
    dispatch(unloading());
    return toast.error(message);
  };
  const reject = async (id: number) => {
    dispatch(loading());
    const { data, message } =
      await adminTransactionServices.rejectedTransaction(id);
    if (data) {
      loadTransaction({ type: 2, status: 1 });
      dispatch(unloading());
      return toast.success("Thực hiện thành công!");
    }
    dispatch(unloading());
    return toast.error(message);
  };
  const renderDataUser = useMemo(() => {
    if (!listTransaction?.length) return [];
    return listTransaction.map((item: ITransactionData, index: number) => {
      return {
        id: item.id,
        email: <div className="walletAddress">{item.email}</div>,
        amount: Number(item.amount).toFixed(2),
        coin:
          item.currency === 1 ? (
            <Logo src={tether} alt="tether" />
          ) : (
            <Logo src={sol} alt="sol" />
          ),
        status: (
          <div className={`status ${convertStatus(item.status)}`}>
            {convertStatus(item.status)}
          </div>
        ),
        createdAt: moment(item.createdAt).format("YYYY-MM-DD HH:mm"),
        action: item.status === 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "center"
            }}
          >
            <Button
              text="Approve"
              type={"blue"}
              onClick={() => {
                approve(item.id);
              }}
            />
            <Button
              text="Reject"
              type={"outline"}
              onClick={() => {
                reject(item.id);
              }}
            />
          </div>
        )
      };
    });
  }, [listTransaction]);

  const handleChangePage = async (page: number) => {
    await loadTransaction({ page: page });
  };

  return (
    <AdminWrapper>
      <Title>Quản lý yêu cầu rút tiền</Title>
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
          header={headerUsers}
          data={renderDataUser}
          total={totalTransaction}
          onMovePage={handleChangePage}
        />
      </BoxUsers>
    </AdminWrapper>
  );
}
