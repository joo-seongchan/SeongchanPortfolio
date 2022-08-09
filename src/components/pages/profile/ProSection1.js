import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
`;
const TitleWrap = styled.div`
  padding-top: 250px;
  text-align: center;
  margin-bottom: 250px;
`;
const Title = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 1px;
`;
const SubTilte = styled.div`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 40px;
`;
const Text = styled.div`
  font-size: 14px;
  opacity: 0.8;
  font-weight: 100;
  span {
    margin-left: 30px;
  }
`;
const Img = styled.img`
  position: absolute;
  height: 1000px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -49%);
`;

export const ProSection1 = () => {
  return (
    <Section>
      <TitleWrap>
        <Title>소통하는 개발자</Title>
        <SubTilte>Joo-SeongChan</SubTilte>
        <Text>
          '혀'를 다스리는 것은 나지만, 내빝어진 '말'은 나를 다스린다.{" "}
          <span>- 유재석</span>
        </Text>
      </TitleWrap>
      <Img src="img/profile/profile1.png"></Img>
    </Section>
  );
};
