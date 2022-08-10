import styled from "styled-components";

const Section = styled.div`
  padding-top: 200px;
`;
const Container = styled.div`
  padding: 0 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LeftCon = styled.div`
  width: 45%;
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 40px;
`;
const Res = styled.div`
  margin-bottom: 30px;
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  color: gray;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 10px;
`;
const Sub = styled.div`
  margin-bottom: 50px;
  font-size: 18px;
  font-weight: 100;
  line-height: 35px;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0;
  span {
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
    font-size: 20px;
    margin: 0 2px;
  }
`;
const MenuWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Menu = styled.div`
  min-width: 150px;
  font-size: 22px;
  font-weight: 100;
`;
const Text = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  span {
    font-size: 18px;
    opacity: 0.8;
  }
`;
const IconCon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 10px;
  font-weight: 400;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
`;

const Skill = styled.div`
  margin-left: 30px;
`;
const ButtonWrap = styled.div`
  display: flex;
`;
const Button = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid white;
  border-radius: 15px;
  margin-right: 30px;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
`;
const RightCon = styled.div`
  width: 50%;
  height: 800px;
  background: url(img/PP/ppseoulmain.png) no-repeat center/cover;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const PoSection4 = () => {
  return (
    <Section>
      <Container>
        <LeftCon>
          <Title>서울식물원 - RENEWAL</Title>
          <Res>반응형 X</Res>
          <Sub>
            서울시에서 운영하는 관광지인 서울 식물원 리뉴얼 페이지입니다.
            <br />
            기존 페이지는 관광장소 임에도 불구하고 서울시에서 운영해서인지 정부
            사이트와 비슷한 UI/UX로 유저가 필요로하는 관광지에 대한 정보를
            찾기가 어려움이 있어 이를 개선하면서 유저가 가보고싶다라는 생각을
            가질 수 있게 식물원의 신선함과 청명함을 살리는데 중점을 두고 리뉴얼
            하였습니다. 식물사진을 크게 배치함으로써 관광소의 시설과 명소들을
            한눈에 보기 쉽게 디자인하였고 실제 식물원의 관광동선과 관광시에도
            활용할 수 있도록 하여 활용도를 올렸습니다.
          </Sub>
          <MenuWrap>
            <Menu>참여도</Menu>
            <Text> TEAM PROJECT (3명 60%)</Text>
          </MenuWrap>
          <MenuWrap>
            <Menu>제작 기간</Menu>
            <Text>2022/05/01 ~ 2022/06/14</Text>
          </MenuWrap>
          <MenuWrap>
            <Menu>페이지</Menu>
            <Text>
              6 Page
              <br />
              <span>(홈, 식물원, 시설안내, 프로그램, 식물정보, 이용안내 )</span>
            </Text>
          </MenuWrap>
          <MenuWrap>
            <Menu>사용 툴</Menu>
            <IconCon>
              <IconWrap>
                <Icon>
                  <img src="img/profile/icon1.png" alt="언어 아이콘" />
                </Icon>
                <Skill>HTML5</Skill>
              </IconWrap>
              <IconWrap>
                <Icon>
                  <img src="img/profile/icon2.png" alt="언어 아이콘" />
                </Icon>
                <Skill>Css3</Skill>
              </IconWrap>
              <IconWrap>
                <Icon>
                  <img src="img/profile/icon3.png" alt="언어 아이콘" />
                </Icon>
                <Skill>JavaScript</Skill>
              </IconWrap>
            </IconCon>
          </MenuWrap>
          <ButtonWrap>
            <Button>
              <a
                href="https://botanicpark.seoul.go.kr/front/main.do"
                target="_blank"
              >
                기존 페이지
              </a>
            </Button>
            <Button>
              <a
                href="https://joo-seongchan.github.io/SeoulGarden_Renewal/index.html"
                target="_blank"
              >
                제작 페이지
              </a>
            </Button>
          </ButtonWrap>
        </LeftCon>
        <RightCon></RightCon>
      </Container>
    </Section>
  );
};
