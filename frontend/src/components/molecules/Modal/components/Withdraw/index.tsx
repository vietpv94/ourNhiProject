import sol from "@Assets/images/molecules/token/sol.png";
import { Button } from "@Components/atoms/Button";
import { CloseIcon } from "@Components/atoms/icon/close";
import { setModal } from "@Redux/actions/modal";
import transactionServices from "@Services/transaction";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Dropdown, Input, InputWrapper, Title, WithdrawWrapper } from "./style";
import tether from "@Assets/images/tether.png";
import useOnClickOutside from "../../../../../hooks/useOnClickOutside";
import React, { useRef } from "react";
import { useMemo } from "react";
import { loading, unloading } from "@Redux/actions/loading";
export interface IWithdrawProps {}

export const ListCurrency = [
  {
    name: "USDT",
    img: tether,
    id: 1,
  },
  {
    name: "SOL",
    img: sol,
    id: 2,
  },
];

export function Withdraw(props: IWithdrawProps) {
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState<number>(1); // SOL=2, USDT=1
  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const handleConfirm = async () => {
    dispatch(loading());
    const res = await transactionServices.requestWithdraw({
      address,
      amount,
      currency,
    });
    dispatch(unloading());
    if (res.data) {
      dispatch(
        setModal({
          modal: "withdraw-successful",
          data: {
            address,
            amount,
            currency,
          },
        })
      );
    } else {
      return toast.error(res.message);
    }
  };

  const handleSelectCurrency = (id: number) => {
    setCurrency(id);
    setDropdown(false);
  };

  useOnClickOutside(dropdownRef, () => setDropdown(false));

  const findCurrency = useMemo(() => {
    return ListCurrency.find((item) => item.id === currency);
  }, [currency]);

  return (
    <WithdrawWrapper>
      <Title>Withdraw</Title>
      <InputWrapper>
        <label>Amount</label>
        <Input ref={dropdownRef}>
          <img
            src={findCurrency?.img}
            alt="token"
            className="icon"
            onClick={() => {
              setDropdown(!dropdown);
            }}
          />
          {dropdown && (
            <Dropdown>
              {ListCurrency.map((item) => (
                <li
                  onClick={() => handleSelectCurrency(item.id)}
                  key={`key-dropdow-withdraw-${item.id}`}
                >
                  <img src={item.img} alt="token" className="icon" />
                  <span>{item.name}</span>
                </li>
              ))}
            </Dropdown>
          )}
          <input
            type="text"
            placeholder="0.00"
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
          />
        </Input>
      </InputWrapper>
      <InputWrapper>
        <label>Your wallet</label>
        <Input>
          <input
            type="text"
            placeholder="DX..."
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <CloseIcon
            type="outline"
            color="#FF476A"
            onClick={() => {
              setAddress("");
            }}
          />
        </Input>
      </InputWrapper>
      <div className="btn">
        <Button text="Withdraw" type="blue" onClick={handleConfirm} />
      </div>
    </WithdrawWrapper>
  );
}
