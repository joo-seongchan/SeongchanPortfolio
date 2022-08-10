import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainstyle } from "../../../styels/GlobalStyle";

const Section = styled.div`
  padding: ${mainstyle.padding};
  padding-top: 150px;
  padding-bottom: 100px;
`;
const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 300px;
  height: 300px;
  background-color: gray;
  border-radius: 50%;
  background: url(img/home/profilebg.png) no-repeat center/cover;
  overflow: hidden;
  transition: 0.5s;
  &:nth-child(2) {
    background: url("img/home/profilebg2.png") no-repeat center/cover;
  }
  &:nth-child(3) {
    background: url(img/home/profilebg4.png) no-repeat center/cover;
  }
  &:hover {
    transform: scale(1.2);
    div {
      transform: translateY(-300px);
    }
  }
`;
const Cover1 = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 28px;
`;
const Cover2 = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 28px;
  font-weight: 600;
`;

export const ToySection3 = () => {
  return (
    <Section>
      <ConWrap>
        <Con>
          <Link to="/profile">
            <Cover1>프 로 필</Cover1>
            <Cover2>바 로 가 기</Cover2>
          </Link>
        </Con>
        <Con>
          <Link to="/portpolio">
            <Cover1>포트폴리오</Cover1>
            <Cover2>바 로 가 기</Cover2>
          </Link>
        </Con>
        <Con>
          <Link to="/communication">
            <Cover1>소통하는 개발자?</Cover1>
            <Cover2>바 로 가 기</Cover2>
          </Link>
        </Con>
      </ConWrap>
    </Section>
  );
};
