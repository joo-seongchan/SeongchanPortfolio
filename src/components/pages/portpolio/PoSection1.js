import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { popolDb } from "./popolDb";

const Section = styled.section``;
const Container = styled.div`
  width: 100%;
`;
const TopBox = styled.div`
  width: 100%;
  height: 650px;
  transition: 0.3s;
`;
const Cover = styled.div`
  padding: 0 10vw;
  padding-top: 150px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
`;
const TextWrap = styled.div``;
const Title = styled.div`
  padding-top: 50px;
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
  width: 730px;
  height: 100%;
  position: relative;
  z-index: 5000;
`;
const Img1 = styled.img`
  position: absolute;
  top: -10%;
  right: 0;
  background-color: lightgray;
  width: 70%;
  height: 60%;
  z-index: 5000;
  border-radius: 25px;
  transition: 0.3s;
`;
const Img2 = styled.img`
  position: absolute;
  top: 15%;
  left: 0;
  background-color: gray;
  width: 70%;
  height: 60%;
  z-index: 5001;
  border-radius: 25px;
  transition: 0.3s;
`;
const Img3 = styled.img`
  position: absolute;
  bottom: 0;
  left: 20%;
  background-color: #1d1d1d;
  width: 70%;
  height: 60%;
  z-index: 5002;
  border-radius: 25px;
  transition: 0.3s;
`;
const BottomBox = styled.div`
  padding: 0 10vw;
  width: 100%;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.5);
`;
const SlideWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 4999;
  display: flex;
  align-items: center;
`;

const SlideBox = styled.div`
  width: 90%;
  cursor: pointer;
`;
const SlideImg = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 25px;
`;
const Name = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

export const PoSection1 = ({
  section2top,
  section3top,
  section4top,
  section5top,
}) => {
  const [page, setPage] = useState("0");

  const nowDB = popolDb[`${page}`];

  const params = {
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1500: {
        slidesPerView: 3.4,
        spaceBetween: 20,
      },
    },
  };

  const handleClick = () => {
    if (page === "0") {
      window.scrollTo({
        top: section2top,
        left: 0,
        behavior: "smooth",
      });
    } else if (page === "1") {
      window.scrollTo({
        top: section3top,
        left: 0,
        behavior: "smooth",
      });
    } else if (page === "2") {
      window.scrollTo({
        top: section4top,
        left: 0,
        behavior: "smooth",
      });
    } else if (page === "3") {
      window.scrollTo({
        top: section5top,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <Section>
      <Container>
        <TopBox
          style={{
            background: `url(${nowDB.bg}) no-repeat center/cover`,
          }}
        >
          <Cover>
            <TextWrap>
              <Title>
                {nowDB.title}
                <br />
                {nowDB.project}
              </Title>
              <PolPle>{nowDB.team}</PolPle>
              <Day>{nowDB.day}</Day>
              <Button onClick={handleClick}>Section</Button>
            </TextWrap>
            <ImgBox>
              <Img1 src={nowDB.img1} alt="이미지" />
              <Img2 src={nowDB.img2} alt="이미지" />
              <Img3 src={nowDB.img3} alt="이미지" />
            </ImgBox>
          </Cover>
        </TopBox>
        <BottomBox>
          <SlideWrap>
            <Swiper modules={[Navigation]} navigation {...params}>
              <SwiperSlide>
                <SlideBox onClick={() => setPage("0")}>
                  <SlideImg src="img/PP/ppslide1.png" alt="이미지" />
                  <Name>VIPS</Name>
                </SlideBox>
              </SwiperSlide>
              <SwiperSlide>
                <SlideBox onClick={() => setPage("1")}>
                  <SlideImg src="img/PP/ppslide2.png" alt="이미지" />
                  <Name>J MOVIES</Name>
                </SlideBox>
              </SwiperSlide>
              <SwiperSlide>
                <SlideBox onClick={() => setPage("2")}>
                  <SlideImg src="img/PP/ppslide3.png" alt="이미지" />
                  <Name>서울식물원</Name>
                </SlideBox>
              </SwiperSlide>
              <SwiperSlide>
                <SlideBox onClick={() => setPage("3")}>
                  <SlideImg src="img/PP/ppslide4.png" alt="이미지" />
                  <Name>JooMovie</Name>
                </SlideBox>
              </SwiperSlide>
            </Swiper>
          </SlideWrap>
        </BottomBox>
      </Container>
    </Section>
  );
};
