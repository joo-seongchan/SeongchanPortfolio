import { Link } from "react-router-dom";
import styled from "styled-components";
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 90px;
  margin-bottom: 50px;
  letter-spacing: 2px;
`;
const Subtitle = styled.div`
  font-size: 32px;
  margin-bottom: 50px;
`;
const Button = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid white;
  a {
    width: 100%;
    height: 100%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const NotFound = () => {
  return (
    <Section>
      <Title>404 Error</Title>
      <Subtitle>페이지를 찾을 수 없습니다. 다른경로를 이용해 주세요</Subtitle>
      <Button>
        <Link to="/">홈으로</Link>
      </Button>
    </Section>
  );
};
