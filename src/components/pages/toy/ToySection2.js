import styled from "styled-components";

const Section = styled.div`
  padding: 0 220px;
  padding-top: 50px;
`;
const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 30%;
`;
const Img = styled.img`
  width: 100%;
  margin-bottom: 50px;
  border-radius: 25px;
`;
const Title = styled.div`
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 100;
  line-height: 25px;
  letter-spacing: 0px;
  opacity: 0.8;
`;
export const ToySection2 = () => {
  return (
    <Section>
      <ConWrap>
        <Con>
          <a
            href="https://joo-seongchan.github.io/loginpj/#/login"
            target="_blank"
          >
            <Img src="img/toy/toyimg1.png" alt="토이 이미지" />
            <Title>로그인/회원가입 페이지 모듈</Title>
            <Text>
              input태그를 활용한 로그인 페이지 모듈입니다. react-hook-form을
              사용하여 유효성 검사 및 데이터 기록을 통해 실제 로그인페이와 같이
              회원가입 후 로그인기능 까지 구현 했습니다. transform을 활용한
              애니메이션 요소를 연출하여 디자인하였습니다.
            </Text>
          </a>
        </Con>
        <Con>
          <a href="https://joo-seongchan.github.io/jooclone/" target="_blank">
            <Img src="img/toy/toyimg2.png" alt="토이 이미지" />
            <Title>애니메이션 페이지 클론</Title>
            <Text>
              이 페이지의 레퍼런스가 된 페이지 클론 코딩 사이트입니다. 중앙
              4가지 박스안의 각기 다른 12개의 이미지가 에니메이션, 딜레이 효과로
              M자를 만들어 내는 듯한 디자인을 연출하였습니다. 각 메뉴탭에 대한
              hover이벤트로 문이 열리는듯 디자인을 연출하였습니다.
            </Text>
          </a>
        </Con>
        <Con>
          <a href="https://joo-seongchan.github.io/practice/" target="_blank">
            <Img src="img/toy/toyimg3.png" alt="토이 이미지" />
            <Title>애니메이션 / TEXT Stroke</Title>
            <Text>
              배경의 올라가는 점들을 애니메이션 효과를 활용하여 물방울이
              커지면서 올라가는 듯한 움직임을 연출하였습니다. 중앙 텍스트는 text
              stroke 효과를 활용하여 텍스트를 따라 선이 그려지는 효과를
              연출했으며 돌아가는 텍스트 또한 애니메이션 효과를 활용하여
              텍스트가 원통모양으로 돌아가는 효과를 연출했습니다.
            </Text>
          </a>
        </Con>
      </ConWrap>
    </Section>
  );
};
