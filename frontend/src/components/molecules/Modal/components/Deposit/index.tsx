import * as React from "react";
import { DepositWrapper, QRCode, Text, Title } from "./style";
import qrcode from "@Assets/images/profile/qrcode.png";
export interface IDepositProps {}

export function Deposit(props: IDepositProps) {
  return (
    <DepositWrapper>
      <Title>Deposit</Title>
      <Text>Scan and send</Text>
      <QRCode>
        <img src={qrcode} alt="qrcode" />
      </QRCode>
      <Text
        style={{
          color: "#00A3FF",
        }}
      >
        Save QR
      </Text>
    </DepositWrapper>
  );
}
