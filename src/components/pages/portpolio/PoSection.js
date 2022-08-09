import styled from "styled-components";
import { mainstyle } from "../../../styels/GlobalStyle";

const Section = styled.section``;
const Container = styled.div`
  width: 100%;
`;
const TopBox = styled.div`
  width: 100%;
  height: 650px;
  background: url(img/pp/ppbg1.png) no-repeat bottom/cover;
`;
const Cover = styled.div`
  padding: 0 220px;
  padding-top: 200px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);
`;
const TextWrap = styled.div``;
const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 80px;
  margin-bottom: 20px;
`;

const PolPle = styled.div`
  font-size: 28px;
  margin-bottom: 15px;
  opacity: 0.8;
`;
const Day = styled.div`
  font-size: 22px;
  margin-bottom: 40px;
  opacity: 0.8;
`;
const Button = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  border-radius: 15px;
`;
const ImgBox = styled.div`
  width: 50%;
  height: 140%;
  position: relative;
  z-index: 5000;
`;
const Img1 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  background-color: lightgray;
  width: 70%;
  height: 40%;
  z-index: 5000;
  border-radius: 25px;
`;
const Img2 = styled.img`
  position: absolute;
  top: 15%;
  left: 0;
  background-color: gray;
  width: 70%;
  height: 40%;
  z-index: 5001;
  border-radius: 25px;
`;
const Img3 = styled.img`
  position: absolute;
  bottom: 0;
  left: 20%;
  background-color: #1d1d1d;
  width: 70%;
  height: 70%;
  z-index: 5002;
  border-radius: 25px;
`;
const BottomBox = styled.div`
  padding: 0 220px;
  width: 100%;
  height: 350px;
  /* background-color: gray; */
`;
const SlideWrap = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  z-index: 6000;
  display: flex;
  align-items: center;
`;

const SlideBox = styled.div`
  margin-right: 30px;
`;
const SlideImg = styled.img`
  margin-bottom: 15px;
  border-radius: 25px;
`;
const Name = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

export const PoSection1 = () => {
  return (
    <Section>
      <Container>
        <TopBox>
          <Cover>
            <TextWrap>
              <Title>
                서울식물원
                <br />
                RENEWAL PROJECT
              </Title>
              <PolPle>TEAM PROJECT ( 주성찬, 박희정, 강정현 )</PolPle>
              <Day>2022/06/14</Day>
              <Button>Section</Button>
            </TextWrap>
            <ImgBox>
              <Img1 src="img/pp/ppimg3.png" alt="이미지" />
              <Img2 src="img/pp/ppimg1.png" alt="이미지" />
              <Img3 src="img/pp/ppimg2.png" alt="이미지" />
            </ImgBox>
          </Cover>
        </TopBox>
        <BottomBox>
          <SlideWrap>
            <SlideBox>
              <SlideImg src="img/pp/ppslide1.png" alt="이미지" />
              <Name>서울 식물원</Name>
            </SlideBox>
            <SlideBox>
              <SlideImg src="img/pp/ppslide2.png" alt="이미지" />
              <Name>J MOVIES</Name>
            </SlideBox>
          </SlideWrap>
        </BottomBox>
      </Container>
    </Section>
  );
};
