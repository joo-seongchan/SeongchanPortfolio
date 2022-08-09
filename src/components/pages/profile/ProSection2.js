import styled from "styled-components";
import { mainstyle } from "../../../styels/GlobalStyle";

const Section = styled.div`
  width: 100%;
  padding: ${mainstyle.padding};
  padding-top: 200px;
  /* background: linear-gradient(
    to left,
    rgba(20, 20, 20, 1),
    rgba(0, 0, 0, 1),
    rgba(20, 20, 20, 1)
  ); */
`;
const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftCon = styled.div``;
const Img = styled.img`
  margin-bottom: 80px;
  border-radius: 50%;
  border: 5px solid #13a1dc;
`;
const ProfileWrap = styled.div`
  padding: 20px;
`;
const Profile = styled.div`
  width: 100%;
`;
const Name = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: 18px;
  display: flex;
  margin-bottom: 30px;
`;
const Day = styled.div`
  opacity: 0.8;
  font-weight: 100;
  margin-right: 50px;
  width: 100px;
`;
const Itro = styled.div`
  margin-top: 10px;
  font-size: 16px;
  line-height: 25px;
  font-weight: 100;
  margin-bottom: 50px;
`;

const RightCon = styled.div`
  padding-top: 50px;
`;
const RConWrap = styled.div`
  display: flex;
  border-top: 1px solid white;
  padding-top: 10px;
`;
const Title = styled.div`
  width: 200px;
  font-size: 24px;
  font-weight: 600;
  color: #13a1dc;
`;
const Con = styled.div`
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 30px;
  font-weight: 400;
`;
const Font = styled.div`
  font-weight: 100;
  margin-top: 10px;
  opacity: 0.8;
`;

const P = styled.div`
  margin-bottom: 25px;
  span {
    font-weight: 100;
    margin-left: 20px;
    opacity: 0.8;
  }
`;

const IconCon = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 30px;
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

export const ProSection2 = () => {
  return (
    <Section>
      <ConWrap>
        <LeftCon>
          <Img src="img/profile/profile2.png" />
          <ProfileWrap>
            <Profile>
              <Name>주 성찬 / Seongchan - Joo</Name>
              <Itro>
                소통하는 개발자 주성찬 입니다. 같이 일을 하는 팀원, 직장동료
                <br />뿐 아니라 유저들과도 소통하는 개발자가 되고싶습니다.
              </Itro>
              <Text>
                <Day>생 년 월 일</Day> <P>1991.06.10</P>
              </Text>
              <Text>
                <Day>이 메 일</Day> <P>jskjsj601@gmail.com</P>
              </Text>
              <Text>
                <Day>전 화 번 호</Day>
                <P> 010-7422-6758</P>
              </Text>
            </Profile>
          </ProfileWrap>
        </LeftCon>
        <RightCon>
          <RConWrap>
            <Title>Education</Title>
            <Con>
              <P>
                SBS아카데미 컴퓨터아트학원
                <br />
                UI/UX 프론트앤드 개발자 양성과정 수료
                <br />
                <Font>( 2022.08 )</Font>
                <br />
                C, C++ 자료구조 알고리즘 기초 객체지향 과정 수료
                <br /> <Font>( 2022.07 ) </Font>
                <br />
                파이썬 프로그래밍 기초 과정 수료
                <br />
                <Font>( 2022.05 )</Font>
              </P>
              <P>
                육군 OBC 수료 <span>( 2014.07 )</span>
              </P>
              <P>
                동의대학교 졸업 <span>( 2014.03 )</span>
              </P>
            </Con>
          </RConWrap>
          <RConWrap>
            <Title>Career</Title>
            <Con>
              <P>
                포탈 하이웨이 <span>( 2019.04 ~ 2022.03 )</span>
                <Font>- 신규 시장 확장Project 참여</Font>
                <Font>
                  - 사내 오픈 매출 Guinness달성 <span>(2억4천만원)</span>
                </Font>
              </P>
              <P>
                이랜드 리테일 <span>( 2017.01 ~ 2019.03 )</span>
                <Font>- 이랜드 그룹 기획점포(부천점)에서 근무</Font>
                <Font>- 매출 성장률 기록 달성 2회</Font>
                <Font>
                  - PB개발 Project 참여 <span>(O'Price)</span>
                </Font>
              </P>
              <P>
                육군 보병 제 7사단 3연대 근무 <span>( 2014.07 ~ 2016.06 )</span>
                <Font>- 2대대 본부중대장 근무</Font>
                <Font>- 보병 소대장 근무</Font>
              </P>
            </Con>
          </RConWrap>
          <RConWrap>
            <Title>Skill</Title>
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
              <IconWrap>
                <Icon>
                  <img src="img/profile/icon4.png" alt="언어 아이콘" />
                </Icon>
                <Skill>React</Skill>
              </IconWrap>
              <IconWrap>
                <Icon>
                  <img src="img/profile/icon5.png" alt="언어 아이콘" />
                </Icon>
                <Skill>Node.js</Skill>
              </IconWrap>
              <IconWrap>
                <Icon>
                  <img src="img/profile/icon6.png" alt="언어 아이콘" />
                </Icon>
                <Skill>Git</Skill>
              </IconWrap>
              <IconWrap>
                <Icon>
                  <img src="img/profile/icon7.png" alt="언어 아이콘" />
                </Icon>
                <Skill>Git Hub</Skill>
              </IconWrap>
            </IconCon>
          </RConWrap>
        </RightCon>
      </ConWrap>
    </Section>
  );
};
