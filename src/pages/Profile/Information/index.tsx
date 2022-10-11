import { Button } from "@Components/atoms/Button";
import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { ClockIcon } from "@Components/atoms/icon/clock";
import { EditIcon } from "@Components/atoms/icon/edit";
import { QRCodeIcon } from "@Components/atoms/icon/QR";
import { ToggleIcon } from "@Components/atoms/icon/toggle";
import { WarningIcon } from "@Components/atoms/icon/warning";
import { Form } from "@Components/molecules/Form";
import { Input } from "@Components/molecules/Form/input";
import * as React from "react";
import { Flex, ReviewTime, Title, UL, Wrapper, QR } from "./style";

export interface IPersonalInformationProps {}

export function PersonalInformation(props: IPersonalInformationProps) {
  return (
    <Wrapper>
      <Form>
        <Input type="text" label="Your ID" />
        <Input type="email" label="Email" />
        <Title>
          <span>General Account Settings</span>
        </Title>
        <Input type="email" label="Email" />
        <Input type="password" label="Password" icon={<EditIcon />} />
        <Title>
          <span>2FA Authenticator</span>
          <ToggleIcon />
        </Title>
        <UL>
          <li>
            Please note your Key down and keep it save. It will help you recover
            Google Authentication in case of losing device. <br />
          </li>
          <li>
            Enter Key in "Enter Passcode" or scan the QR code below on your
            Google Authentication app.
          </li>
        </UL>
        <Input
          type="text"
          label="Product Key"
          icon={
            <QR>
              <span>QR Code</span>
              <QRCodeIcon />
            </QR>
          }
        >
          <Button customStyle={"height: 40px;"} type="blue" text="Copy" />
        </Input>
        <Button type="blue" text="Activate 2FA" customStyle={"width: 100%;"} />
        <Title>
          <span>
            KYC
            <WarningIcon
              color="#FF9900"
              customStyle={{
                height: 12,
                width: 12,
              }}
            />
          </span>
          <ArrowIcon color="#00A3FF" direction="up" style="solid" />
        </Title>
        <ReviewTime>
          <ClockIcon />
          <span>Review time: 2 days</span>
        </ReviewTime>
        <Flex>
          <Input type="text" label="Full Name" />
          <Input type="text" label="Date of Birth" placeholder="YYYY/MM/DD" />
        </Flex>
        <Input label="Full Address" type="text" />
        <Input type="text" label="Phone Number" />
        {/* <Input type="file" label="ID identify card" /> */}
        <Button text="Confirm" type="blue" customStyle={"width: 100%;"} />
      </Form>
    </Wrapper>
  );
}
