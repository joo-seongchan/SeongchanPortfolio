import styled from "styled-components";
import { PageTitle } from "../../PageTitle";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1d1d1d;
`;
const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 145%;
  top: -20%;
  left: 0;
`;
const Title = styled.div`
  font-size: 50px;
  margin-bottom: 50px;
  font-weight: 600;
`;
const Text = styled.div`
  font-size: 18px;
  line-height: 30px;
  font-weight: 300;
  opacity: 0.8;
  letter-spacing: 0px;
  text-align: center;
`;
export const Communication = () => {
  return (
    <Section>
      <PageTitle title={"Communication"} />
      <Img src="img/communication.png" />
      <Title>소통하는 개발자?</Title>
      <Text>
        먼저 저의 홈페이지에 방문해주셔서 대단히 감사합니다.
        <br />
        소통하는 개발자는 제가 되고 싶은 개발자의 모습입니다. 사회 생활에서 가장
        중요한 것이 소통이라고 합니다.
        <br />
        특히 IT엔지니어의 특성상 클라이언트, 기획자, 디자이너 등 많은 소통이
        필요합니다.
        <br />
        하지만 제가 말하는 소통하는 개발자란 단순히 업무에 국한된 소통이 아닌
        <br />
        유저와 소통하는 개발자입니다. 유저와의 소통이라고 함은 유저의 편의와
        <br />
        유저들이 원하는 Needs를 충족시킬 수 있는 개발자라고 생각합니다.
        <br />
        특히 최신 트렌드, 유저들의 UX가 가장 중요한 부분이라고 생각합니다.
        그렇기 때문에
        <br />제 자신에게 게으르지 않고 지속적으로 발전하는 개발자가
        되려고합니다.
        <br />
        <br />
        저는 IT개발자 공부전에는 유통업에 종사했습니다. 유통업 특성상 포화상태의
        시장에서 <br />
        나쁘지 않은 매출 성적을 거두었고 이랜드라는 대기업의 기획점포에서 근무도
        한 경험이 있습니다.
        <br />
        이를 실현할수 있었던 원동력은 고객들과의 소통이었습니다. 고객들이 원하는
        상품, 관심을 많이가지는 상품의
        <br />
        매장배치 등을 통해 고객의 Needs를 알기위해 항상 고객과 소통했고 이는
        좋은 성적으로 연결 되었습니다.
        <br />
        <br />
        비록 지금은 주니어 개발자이지만 저의 역량을 갈고 닦아 성장하여 한국
        최고의
        <br />
        팀에서 팀장을 하는 것이 저의 목표입니다. 긴 글 읽어주셔서 대단히
        감사합니다.
      </Text>
    </Section>
  );
};
