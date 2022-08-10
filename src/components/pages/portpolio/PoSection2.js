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
  background: url(img/pp/ppvipsmain.png) no-repeat center/cover;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const PoSection2 = () => {
  return (
    <Section>
      <Container>
        <LeftCon>
          <Title>VIPS - RENEWAL</Title>
          <Res>반응형 X (진행중)</Res>
          <Sub>
            외식 업체인 VIPS 리뉴얼 페이지입니다.
            <br />
            기존 노후된 페이지의 활용성을 높이며 VIPS의 매장 디자인과 같이
            어두운 배경을 통해 스테이크의 붉은색과 샐러드의 색감을 살려 상품을
            돋보이게 하였습니다. <br />
            페이지는 총 6페이지로 구성되어 있으며 그 중 홈과 상품소개 4페이지 외{" "}
            <span>예약모듈</span>과 <span>주소 검색 모듈</span>을 제작하여
            온라인 예약페이지와 매장검색 페이지를 제작하였으며 유효성 검사 및
            일시적으로 데이터 저장을 하여 실제 예약 페이지 모듈과 같이
            작동합니다.(새로고침시 초기화 됨)
          </Sub>
          <MenuWrap>
            <Menu>참여도</Menu>
            <Text> TEAM PROJECT (2명 75%)</Text>
          </MenuWrap>
          <MenuWrap>
            <Menu>제작 기간</Menu>
            <Text>2022/07/20 ~ 2022/08/08</Text>
          </MenuWrap>
          <MenuWrap>
            <Menu>페이지</Menu>
            <Text>
              6 Page
              <br />
              <span>
                (Home, Steak, Saladbar, Store, MemberShip, Reservation)
              </span>
            </Text>
          </MenuWrap>
          <MenuWrap>
            <Menu>사용 툴</Menu>
            <IconCon>
              <IconWrap>
                <Icon>
                  <img src="img/profile/icon4.png" alt="언어 아이콘" />
                </Icon>
                <Skill>React</Skill>
              </IconWrap>
              <IconWrap>
                <Icon>
                  <img src="img/profile/icon6.png" alt="언어 아이콘" />
                </Icon>
                <Skill>Git</Skill>
              </IconWrap>
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
              {" "}
              <a href="https://www.ivips.co.kr:7002/main.asp" target="_blank">
                기존 페이지
              </a>
            </Button>
            <Button>
              <a
                href="https://joo-seongchan.github.io/VIPs-Renewal/#/"
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
