import { WarningIcon } from "@Components/atoms/icon/warning";
import * as React from "react";
import {
  Available,
  Content,
  DefiWrapper,
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
  Warning,
} from "./style";
import sol from "@Assets/images/molecules/token/sol.png";
import sol2 from "@Assets/images/molecules/card/sol-token.png";
import { Duration } from "@Components/molecules/Duration";
import { TimeStepper } from "@Components/molecules/TimeStepper";
import { Button } from "@Components/atoms/Button";
import { TickIcon } from "@Components/atoms/icon/tick";
import { useDispatch } from "react-redux";
import { setModal } from "@Redux/actions/modal";
import { useEffect, useState } from "react";
import stakingServices from "@Services/staking";
import { groupBy } from "lodash";
import { ICardStakingData } from "@Components/molecules/CardStaking";
export interface IDeFiProps {
  durations: number[];
}

const data = [
  {
    label: "Stake Date:",
    value: "2022-10-04 11:33",
  },
  {
    label: "Value Date",
    value: "2022-10-05 07:00",
  },
  {
    label: "Interest Distribution Date",
    value: "2022-10-05 07:00",
  },
];

const dataTerm = [
  {
    id: 1,
    icon: <WarningIcon color="#37373B" />,
    text: "The APR is adjusted daily based on the on-chain staking rewards, and the specific APR is subject to the page display on the day.",
  },
  {
    id: 1,
    icon: <WarningIcon color="#37373B" />,
    text: "APR does not mean the actual or predicted returns in fiat currency.",
  },
];
export function DeFi(props: IDeFiProps) {
  const [selected, setSelected] = useState<number>(props.durations[0]);
  const [value, setValue] = useState<number>(0);
  const [agree, setAgree] = useState<boolean>(false);
  const [defiDuration, setDefiDuration] = useState<any>();
  const dispatch = useDispatch();
  const handleConfirm = () => {
    const pack: ICardStakingData = {
      value,
      duration: selected,
      percentProfitPerMonth: defiDuration?.percentProfitPerMonth || 0,
      percentProfitPerDay: defiDuration?.percentProfitPerDay || 0,
      maxProfit: 0,
      poolMaxStakeValue: 0,
      buffCurrentStakeValue: 0,
    };
    dispatch(
      setModal({ modal: "stake-confirm", data: { selectedPack: pack } })
    );
  };

  const loadDefiDuration = async () => {
    const { data } = await stakingServices.getStakingDefiDuration();

    const reDefineDuration = groupBy(data, "duration");
    console.log(reDefineDuration);
    setDefiDuration(data);
  };

  useEffect(() => {
    loadDefiDuration();
  }, []);

  const handleAgree = () => {
    setAgree(!agree);
  };
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
                viewBox: "0 0 24 24",
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
              <TokenInput>
                <img src={sol2} alt="token" />
                <span className="name">SOl</span>
              </TokenInput>
            </Input>
          </Subscription>
          <Available>
            <span className="amount">0.00 SOl&nbsp;</span>
            <span className="label"> Available</span>
          </Available>
          <LockedAmount>
            <span className="title">Locked Amount Limitation</span>
            <Item>
              <span className="label">Minimum: </span>
              <span className="amount">0.001 SOL</span>
            </Item>
            <Item>
              <span className="label">Available: </span>
              <span className="amount">50 SOL</span>
            </Item>
            <Item>
              <span className="label">Total Personal Quota: </span>
              <span className="amount">50 SOL</span>
            </Item>
          </LockedAmount>
        </Left>
        <Right>
          <Title style={{ padding: "unset" }}>
            <span>Summary</span>
            <WarningIcon color="#292D32" />
          </Title>
          <Content>
            <TimeStepper
              customStyle={{
                marginTop: "20px",
              }}
              data={data}
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
