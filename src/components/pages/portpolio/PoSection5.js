import styled from "styled-components";

const Section = styled.div`
  padding-top: 200px;
  margin-bottom: 150px;
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

  font-size: 18px;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const RightCon = styled.div`
  width: 50%;
  height: 800px;
  background: url(img/PP/ppjoomain.png) no-repeat center/cover;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const PoSection5 = () => {
  return (
    <Section>
      <Container>
        <RightCon></RightCon>
        <LeftCon>
          <Title>Joo-Movie - CLONE</Title>
          <Res>반응형</Res>
          <Sub>
            <span>TMDB의 API</span>를 활용해 기존 OTT서비스 페이지를
            클론하였습니다.
            <br />
            API를 활용하는 방법에 대한 공부를 하면서 제작한 클론 페이지입니다.
            DB로부터 데이터를 받아오는 방법부터 그에 따른 프론트앤드 영역에서
            필요한 검사를 위한 Hook 및 외부DB로 데이터를 보내기위한 input태그에
            대한 유효성 검사를 연습하고 Swiper등 다양한 라이브러리를 활용하여
            제작 하였습니다.
          </Sub>
          <MenuWrap>
            <Menu>참여도</Menu>
            <Text> PERSONAL PROJECT (100%)</Text>
          </MenuWrap>
          <MenuWrap>
            <Menu>제작 기간</Menu>
            <Text>2022/06/14 ~ 2022/06/24</Text>
          </MenuWrap>
          <MenuWrap>
            <Menu>페이지</Menu>
            <Text>
              3 Page
              <br />
              <span>(Home,Search, Detail)</span>
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
              <a
                href="https://joo-seongchan.github.io/joomovie/#/"
                target="_blank"
              >
                제작 페이지
              </a>
            </Button>
          </ButtonWrap>
        </LeftCon>
      </Container>
    </Section>
  );
};
