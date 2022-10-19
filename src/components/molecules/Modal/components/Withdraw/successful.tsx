import * as React from "react";
import { Flex, Footer, Logo, Title, WithdrawWrapper } from "./style";
import successful from "@Assets/images/Gif/successful.gif";

export interface IWithdrawSuccessfulProps {}

export function WithdrawSuccessful(props: IWithdrawSuccessfulProps) {
  const address = "DX8079xyayi098093nd8q9xqw309joq";
  return (
    <>
      <WithdrawWrapper>
        <Logo src={successful} alt="successful" />
        <Title
          style={{
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          Withdrawal request successful
        </Title>
        <Flex>
          <div className="label">Withdrawal amount</div>
          <div
            className="value"
            style={{
              color: "#53BA95",
            }}
          >
            $300
          </div>
        </Flex>
        <Flex>
          <div className="label">Wallet address</div>
          <div className="value">{address.slice(0, 10) + "..."}</div>
        </Flex>
      </WithdrawWrapper>{" "}
      <Footer>
        *Order is being checked. The amount will be automatically transferred to
        your account upon{" "}
        <span
          style={{
            color: "#53BA95",
          }}
        >
          success
        </span>
        .
      </Footer>
    </>
  );
}
