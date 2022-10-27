import * as React from "react";
import { Flex, Footer, Logo, Title, WithdrawWrapper } from "./style";
import successful from "@Assets/images/Gif/successful.gif";
import { IWithdrawRequest } from "@Services/transaction";

export interface IWithdrawSuccessfulProps {
  widthDrawData: IWithdrawRequest;
}

export function WithdrawSuccessful({
  widthDrawData
}: IWithdrawSuccessfulProps) {
  return (
    <>
      <WithdrawWrapper>
        <Logo src={successful} alt="successful" />
        <Title
          style={{
            fontSize: "14px",
            marginBottom: "20px"
          }}
        >
          Withdrawal request successful
        </Title>
        <Flex>
          <div className="label">Withdrawal amount</div>
          <div
            className="value"
            style={{
              color: "#53BA95"
            }}
          >
            {`${widthDrawData.currency === 1 ? "$" : "SOL"} ${widthDrawData.amount}`}
          </div>
        </Flex>
        <Flex>
          <div className="label">Wallet address</div>
          <div className="value">{widthDrawData.address.slice(0, 10) + "..."}</div>
        </Flex>
      </WithdrawWrapper>{" "}
      <Footer>
        *Order is being checked. The amount will be automatically transferred to
        your account upon{" "}
        <span
          style={{
            color: "#53BA95"
          }}
        >
          success
        </span>
        .
      </Footer>
    </>
  );
}
