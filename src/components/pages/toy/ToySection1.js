import styled from "styled-components";

const Section = styled.div`
  padding: 0 220px;
  padding-top: 200px;
  display: flex;
  justify-content: space-between;
`;
const Img = styled.img``;
const TextWrap = styled.div`
  width: 600px;
  padding-top: 100px;
`;
const Title = styled.div`
  font-size: 70px;
  margin-bottom: 50px;
`;
const Text = styled.div`
  font-size: 24px;
  line-height: 40px;
  opacity: 0.6;
`;

export const ToySection1 = () => {
  return (
    <Section>
      <Img src="img/toy/toybg.png" alt="장난감사진" />
      <TextWrap>
        <Title>토이 프로젝트</Title>
        <Text>
          개발자가 되기 위해 공부를 시작할 때 부터 하나씩 만들어 본 토이
          프로젝트입니다. 처음 시작한 개발공부 시점부터 연습해온 토이프로젝트라
          퀄리티와 기능면에서 다소 부족함이 있을 수 있습니다. 하지만 하나씩
          하나씩 연습해오면서 스스로 성장하는 제 자신을 느낄 수 있었던 자료들
          입니다. 이런 개인 역량을 개발하기 위한 노력을 계속 할 것이며 더욱 더
          발전할 수 있음을 봐주시면 감사하겠습니다.
        </Text>
      </TextWrap>
    </Section>
  );
};
