import { ArrowIcon } from "@Components/atoms/icon/arrow";
import { Header } from "@Components/molecules/Header";
import * as React from "react";
import { Answer, Main, QA, QuestionWrapper, UL, Wrapper } from "./style";

export interface IFAQProps {}

interface IQuestion {
  id: number;
  question: string;
  onClick: () => void;
  currentId: number;
}

export const Question = ({ question, onClick, currentId, id }: IQuestion) => {
  return (
    <QuestionWrapper id={`${id}`} onClick={onClick}>
      <span className="question">{question}</span>
      <ArrowIcon
        style="outline"
        color="#3F3F3F"
        direction={currentId === id ? "up" : "down"}
      />
    </QuestionWrapper>
  );
};
export function FAQ(props: IFAQProps) {
  const [showAnswer, setShowAnswer] = React.useState(0);
  return (
    <Wrapper>
      <div className="mask"></div>
      <Header />
      <Main>
        <div className="title">FAQ</div>
        <QA>
          <Question
            id={1}
            currentId={showAnswer}
            question="1 - What is Solana.lido?"
            onClick={() => {
              showAnswer === 1 ? setShowAnswer(0) : setShowAnswer(1);
            }}
          />
          {showAnswer === 1 && (
            <Answer>
              <UL>
                <li>
                  Solana.lido is a decentralized finance (DeFi) protocol that
                  allows users to stake their SOL tokens and earn rewards in the
                  form of LDO tokens.
                </li>
                <li>
                  The protocol is built on the Solana blockchain and is governed
                  by the Lido DAO.
                </li>
              </UL>
            </Answer>
          )}
          <Question
            id={2}
            currentId={showAnswer}
            question="2 - What is Solana.lido?"
            onClick={() => {
              showAnswer === 2 ? setShowAnswer(0) : setShowAnswer(2);
            }}
          />
          {showAnswer === 2 && (
            <Answer>
              <UL>
                <li>
                  Solana.lido is a decentralized finance (DeFi) protocol that
                  allows users to stake their SOL tokens and earn rewards in the
                  form of LDO tokens.
                </li>
                <li>
                  The protocol is built on the Solana blockchain and is governed
                  by the Lido DAO.
                </li>
              </UL>
            </Answer>
          )}
          <Question
            id={3}
            currentId={showAnswer}
            question="3 - What is Solana.lido?"
            onClick={() => {
              showAnswer === 3 ? setShowAnswer(0) : setShowAnswer(3);
            }}
          />
          {showAnswer === 3 && (
            <Answer>
              <UL>
                <li>
                  Solana.lido is a decentralized finance (DeFi) protocol that
                  allows users to stake their SOL tokens and earn rewards in the
                  form of LDO tokens.
                </li>
                <li>
                  The protocol is built on the Solana blockchain and is governed
                  by the Lido DAO.
                </li>
              </UL>
            </Answer>
          )}
          <Question
            id={4}
            currentId={showAnswer}
            question="4 - What is Solana.lido?"
            onClick={() => {
              showAnswer === 4 ? setShowAnswer(0) : setShowAnswer(4);
            }}
          />
          {showAnswer === 4 && (
            <Answer>
              <UL>
                <li>
                  Solana.lido is a decentralized finance (DeFi) protocol that
                  allows users to stake their SOL tokens and earn rewards in the
                  form of LDO tokens.
                </li>
                <li>
                  The protocol is built on the Solana blockchain and is governed
                  by the Lido DAO.
                </li>
              </UL>
            </Answer>
          )}
          <Question
            id={5}
            currentId={showAnswer}
            question="5 - What is Solana.lido?"
            onClick={() => {
              showAnswer === 5 ? setShowAnswer(0) : setShowAnswer(5);
            }}
          />
          {showAnswer === 5 && (
            <Answer>
              <UL>
                <li>
                  Solana.lido is a decentralized finance (DeFi) protocol that
                  allows users to stake their SOL tokens and earn rewards in the
                  form of LDO tokens.
                </li>
                <li>
                  The protocol is built on the Solana blockchain and is governed
                  by the Lido DAO.
                </li>
              </UL>
            </Answer>
          )}
        </QA>
      </Main>
    </Wrapper>
  );
}
