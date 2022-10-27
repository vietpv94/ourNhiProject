import * as React from "react";
import { DepositWrapper, QRCode, Text, Title } from "./style";
import qrcode from "@Assets/images/profile/qrcode.png";
import { Input } from "@Components/atoms/Form";
import { Flex } from "@Components/molecules/Header/style";
export interface IKYCDetailProps {}

export function KYCDetail(props: IKYCDetailProps) {
  return (
    <DepositWrapper>
      {/* <Flex>
        <Input
          type="text"
          label="Full Name"

        />
        <Input type="text" label="Date of Birth" placeholder="YYYY/MM/DD" />
      </Flex>
      <Input label="Full Address" type="text" />
      <Input type="text" label="Phone Number" />
      <Input type="file" label="ID identify card" /> */}
    </DepositWrapper>
  );
}
