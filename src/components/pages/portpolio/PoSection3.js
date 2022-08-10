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
  background: url(img/pp/ppjmoviesmain.png) no-repeat center/cover;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const PoSection3 = () => {
  return (
    <Section>
      <Container>
        <RightCon></RightCon>
        <LeftCon>
          <Title>J MOVIES - CREATE</Title>
          <Res>반응형</Res>
          <Sub>
            <span>TMDB의 API</span>를 활용해 제작한 OTT서비스 페이지 입니다.
            <br />
            기존 OTT서비스 페이지의 UI/UX가 훌륭하지만 제가 느끼는 불편함에 따라
            기존사이트와 다른 디자인을 선택했습니다. 홈 화면부터 제공되는
            컨텐츠량이 많아 무엇을 볼지 선택에 어려움이 생기고 이는{" "}
            <span>'선택이 어려움` - '볼게 없음' - '유저 이탈'</span> 이라는
            생각을 가질 수 있다고 생각하여 홈에서 제공하는 컨텐츠를 제한함으로써
            유저의 능동적인 활동에 따라 제공되는 컨텐츠를 볼 수 있도록
            유도했습니다.
            <br />
            페이지는 총 8페이지로 구성되어 있으며 <span>TMDB의 API를</span> 통해
            OTT서비스에 필요한 자료로 인기, 평점, 추천, 검색 등의 분류로
            유저에게 서비스를 제공합니다. 그 외{" "}
            <span>회원가입 - 로그인 모듈</span> 을 제작하여 기능을 구현
            하였습니다.
          </Sub>
          <MenuWrap>
            <Menu>참여도</Menu>
            <Text> PERSONAL PROJECT (100%)</Text>
          </MenuWrap>
          <MenuWrap>
            <Menu>제작 기간</Menu>
            <Text>2022/06/25 ~ 2022/07/20</Text>
          </MenuWrap>
          <MenuWrap>
            <Menu>페이지</Menu>
            <Text>
              8 Page
              <br />
              <span>
                (Home, Movies, TV Shows, MovieDetail, TV Detail, Up Comming,
                Search, Login, SingUp)
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
              <a href="https://joo-seongchan.github.io/JMovie/" target="_blank">
                제작 페이지
              </a>
            </Button>
          </ButtonWrap>
        </LeftCon>
      </Container>
    </Section>
  );
};
