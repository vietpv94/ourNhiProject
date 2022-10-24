import { WarningIcon } from "@Components/atoms/icon/warning";
import * as React from "react";
import {
  Available,
  Content,
  DefiWrapper,
  Dropdown,
  Input,
  Item,
  ItemTerm,
  Left,
  Line,
  LockedAmount,
  Right,
  Subscription,
  Term,
  Title,
  Token,
  TokenInput,
  Tooltip,
  Warning
} from "./style";
import sol from "@Assets/images/molecules/token/sol.png";
import sol2 from "@Assets/images/molecules/card/sol-token.png";
import { Duration } from "@Components/molecules/Duration";
import { ITimeStepper, TimeStepper } from "@Components/molecules/TimeStepper";
import { Button } from "@Components/atoms/Button";
import { TickIcon } from "@Components/atoms/icon/tick";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "@Redux/actions/modal";
import { useEffect, useState } from "react";
import stakingServices from "@Services/staking";
import { groupBy } from "lodash";
import { ICardStakingData } from "@Components/molecules/CardStaking";
import tether from "@Assets/images/tether.png";
import useOnClickOutside from "@Hooks/useOnClickOutside";
import { useMemo } from "react";
import currency from "currency.js";
import { RootState } from "@Redux/reducers";
import moment from "moment";
import { toast } from "react-toastify";
import { loading, unloading } from "@Redux/actions/loading";
import useHover from "@Hooks/useHover";
import { userServices } from "@Services/index";

export interface IDeFiProps {
  durations: number[];
}

export const ListCurrency = [
  {
    name: "USDT",
    img: tether,
    id: 1
  },
  {
    name: "SOL",
    img: sol2,
    id: 2
  }
];

const dataTerm = [
  {
    id: 1,
    icon: <WarningIcon color="#37373B" />,
    text: "The APR is adjusted daily based on the on-chain staking rewards, and the specific APR is subject to the page display on the day."
  },
  {
    id: 1,
    icon: <WarningIcon color="#37373B" />,
    text: "APR does not mean the actual or predicted returns in fiat currency."
  }
];

interface IPoolData {
  id: number;
  level: number;
  value: number;
  percentProfitPerDay: number;
  percentProfitPerMonth: number;
  minimumValue: number;
  maximumValue: number;
  poolLimit: number;
  duration: number;
  type: number;
  createdAt: string;
  poolMaxStakeValue: number;
  currentStakeValue: number;
}
export function DeFi(props: IDeFiProps) {
  const [selected, setSelected] = useState<number>(props.durations[0]);
  const [stakeTimeData, setStakeTimeData] = useState<ITimeStepper[]>([]);
  const [coin, setCoin] = useState<number>(2); // SOL=2, USDT=1
  const [selectedDuration, setSelectedDuration] = useState<IPoolData>();
  const dropdownRef = React.useRef(null);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const [agree, setAgree] = useState<boolean>(false);
  const hoverRef = React.useRef(null);
  const isHover = useHover(hoverRef);
  const [defiDuration, setDefiDuration] = useState<IPoolData[]>([]);
  const dispatch = useDispatch();
  const [balance, setBalance] = useState<{
    balance: number;
    solBalance: number;
  }>({ balance: 0, solBalance: 0 });
  const handleConfirm = () => {
    if (!agree)
      return toast.warning("You must agree with Lido Simple Earn Agreement");
    const pack: ICardStakingData = {
      value,
      duration: selected,
      percentProfitPerMonth: selectedDuration?.percentProfitPerMonth || 0,
      percentProfitPerDay: selectedDuration?.percentProfitPerDay || 0,
      maxProfit: 0,
      poolMaxStakeValue: selectedDuration?.poolMaxStakeValue || 0,
      currentStakeValue: selectedDuration?.currentStakeValue || 0,
      currency: coin
    };
    dispatch(
      setModal({
        modal: "stake-confirm",
        data: { selectedPack: pack, type: 2 }
      })
    );
  };

  const loadDefiDuration = async () => {
    dispatch(loading());
    const { data } = await stakingServices.getStakingDefiDuration();
    const selectedDuration = data.filter(
      (d) => d.duration === props.durations[0]
    )[0];
    setSelectedDuration(selectedDuration);
    setDefiDuration(data);
    dispatch(unloading());
  };

  useEffect(() => {
    const selectedDuration = defiDuration.filter(
      (d) => d.duration === selected
    )[0];
    setSelectedDuration(selectedDuration);

    const data = [
      {
        label: "Stake Date:",
        value: moment(Date.now()).format("YYYY-MM-DD HH:mm")
      },
      {
        label: "Value Date",
        value: moment(Date.now()).format("YYYY-MM-DD HH:mm")
      },
      {
        label: "Interest Distribution Date",
        value: moment(Date.now()).add(1, "days").format("YYYY-MM-DD HH:mm")
      }
    ];
    setStakeTimeData(data);
  }, [selected]);

  const loadBalance = async () => {
    const { data } = await userServices.getDashboard();
    const { balance, solBalance } = data;
    setBalance({ balance, solBalance });
  };

  useEffect(() => {
    loadDefiDuration();
    loadBalance()
  }, []);

  const handleAgree = () => {
    setAgree(!agree);
  };

  const handleSelectCurrency = (id: number) => {
    setCoin(id);
    setDropdown(false);
  };
  useOnClickOutside(dropdownRef, () => setDropdown(false));

  const findCurrency = useMemo(() => {
    return ListCurrency.find((item) => item.id === coin);
  }, [coin]);

  return (
    <DefiWrapper>
      <div className="container">
        <Left>
          <Title>DeFi Staking</Title>
          <Line />
          <Warning>
            <WarningIcon
              type="triangle"
              color="#FFC107"
              customStyle={{
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
              }}
            />
            <span className="description">
              Lido strives to offer its users only the best DeFi Mining
              projects. However, Lido only acts as a platform to showcase
              projects and provide users with related services, such as
              accessing funds on behalf of the user and distributing earnings,
              etc. Binance does not assume liability for any losses incurred due
              to project on-chain contract security issues.
            </span>
          </Warning>
          <Token>
            <img src={sol} />
            <span className="name">SOl</span>
          </Token>
          <Duration
            type="month"
            selected={selected}
            setSelected={setSelected}
            list={props.durations}
            className="duration"
          />
          <Subscription>
            <span className="label">Subscription amount</span>
            <Input>
              <input
                type="number"
                placeholder="Please enter the amount"
                onChange={(e) => {
                  setValue(Number(e.target.value));
                }}
              />
              <TokenInput ref={dropdownRef}>
                <div className="show" onClick={() => setDropdown(!dropdown)}>
                  <img src={findCurrency?.img} alt="token" />
                  <span className="name">{findCurrency?.name}</span>
                </div>
                {dropdown && (
                  <Dropdown>
                    {ListCurrency.map((item) => (
                      <li
                        key={`key-dropdow-defi-${item.id}`}
                        onClick={() => {
                          handleSelectCurrency(item.id);
                        }}
                      >
                        <img src={item.img} alt="token" className="icon" />
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </Dropdown>
                )}
              </TokenInput>
            </Input>
          </Subscription>
          <Available>
            <span className="amount">
              {coin === 1
                ? `${currency(balance.balance, {
                    symbol: "$",
                    precision: 0
                  }).format()} `
                : `${balance.solBalance} SOL `}
              &nbsp;
            </span>
            <span className="label"> Available</span>
          </Available>
          <LockedAmount>
            <span className="title">Locked Amount Limitation</span>
            <Item>
              <span className="label">Minimum: </span>
              <span className="amount">
                {selectedDuration
                  ? currency(selectedDuration.minimumValue, {
                      symbol: "$",
                      precision: 0
                    }).format()
                  : "$0"}
              </span>
            </Item>
          </LockedAmount>
        </Left>
        <Right>
          <Title style={{ padding: "unset" }} ref={hoverRef}>
            <span>Summary</span>
            <WarningIcon color="#292D32" />
            {isHover && (
              <Tooltip>
                <span>
                  DeFi Staking subscription and redemption are closed during
                  23:50-00:10 (UTC) daily. No interest is accumulated on
                  products purchased on the day of subscription.
                </span>
              </Tooltip>
            )}
          </Title>
          <Content>
            <TimeStepper
              customStyle={{
                marginTop: "20px"
              }}
              interest={selectedDuration?.percentProfitPerDay || 0}
              data={stakeTimeData}
            />
            <Term>
              {dataTerm.map((item, index) => (
                <ItemTerm key={`tern-${index}`}>
                  {item.icon}
                  <span className="text">{item.text}</span>
                </ItemTerm>
              ))}
              <ItemTerm key={`term-3`}>
                <TickIcon
                  type="square"
                  color={agree ? "#00A3FF" : "#37373B"}
                  status={agree ? "tick" : "cross"}
                  onClick={handleAgree}
                />
                <span className="text">
                  I have read and I agree to Lido Simple Earn Service Agreement
                </span>
              </ItemTerm>
            </Term>
          </Content>
          <Button
            onClick={handleConfirm}
            customStyle={"width: 100%;"}
            type="blue"
            text="Confirm"
          />
        </Right>
      </div>
    </DefiWrapper>
  );
}
