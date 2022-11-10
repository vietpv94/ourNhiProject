import { ArrowIcon } from "@Components/atoms/icon/arrow";
import * as React from "react";
import {
  Box,
  Left,
  Title,
  FromTo,
  TranferWrapper,
  Token,
  TokenImage,
  Warning,
  Label,
  Input,
  Max,
  Flex,
} from "./style";
import { TradeIcon } from "../../../../../admin/src/components/atoms/icon/tradeIcon";
import { MoneyIcon } from "../../atoms/icon/money";
import sol from "@Assets/images/molecules/token/sol.png";
import { Button } from "@Components/atoms/Button";

export interface ITransferProps {}

export function Transfer(props: ITransferProps) {
  return (
    <TranferWrapper>
      <Title>Transfer</Title>
      <Box style={{
        marginTop: "40px",
      }}>
        <Left>
          <FromTo>
            <div className="label">
              <TradeIcon color=" #C1CBD7" />
              <span>From</span>
            </div>
            <div className="selector">
              <span>Ví giao ngay</span>
              <ArrowIcon style="outline" direction="left" color="#00A3FF" />
            </div>
          </FromTo>
          <FromTo>
            <div className="label">
              <ArrowIcon style="default" direction="down" color="#C1CBD7" />
            </div>
          </FromTo>
          <FromTo>
            <div className="label">
              <MoneyIcon />
              <span>To</span>
            </div>
            <div className="selector">
              <span>Cross Margin</span>
              <ArrowIcon style="outline" direction="left" color="#00A3FF" />
            </div>
          </FromTo>
        </Left>
        <ArrowIcon type="double" color="#292D32" />
      </Box>
      <Box
        style={{
          marginTop: "16px",
        }}
      >
        <Token>
          <TokenImage src={sol} alt="sol" />
          <span>SOL</span>
        </Token>
        <ArrowIcon
          color="#00A3FF"
          direction="left"
          style="outline"
          customStyle={{
            width: "12",
            height: "12",
          }}
        />
      </Box>
      <Warning>Không có sẵn tiền để chuyển, vui lòng chọn đồng khác.</Warning>
      <Label>Amount</Label>
      <Box
        style={{
          marginTop: "10px",
        }}
      >
        <Input type="number" placeholder="Min 0.00001" />
        <Max>
          <span>SOL</span>
          <span>Max</span>
        </Max>
      </Box>
      <Flex>
        <span className="label">Khả dụng</span>
        <span className="value">0.0 SOL</span>
      </Flex>
      <Flex>
        <span className="label">Đang đặt lệnh</span>
        <span className="value">0.0 SOL</span>
      </Flex>
      <Button text="Status" type={"silver"} customStyle=" margin-top: 20px;" />
    </TranferWrapper>
  );
}
