import styled, { keyframes } from "styled-components";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";

const Wrap = styled.div`
  width: 16.66667vw;
  height: 50vh;
  background-color: black;
  position: relative;
  overflow: hidden;
  border: 0.25px solid rgba(255, 255, 255, 0.2);
`;

const photo1 = keyframes`
0%,33.33333%,100%{
transform: translate(0,0) ;
}
16.66667%{
transform: translate(270px,0) ;
}
`;

const Img1 = styled.img`
  width: 270px;
  height: 270px;
  position: absolute;
  bottom: 0;
  left: -270px;
  animation: ${photo1} 6s ease-in-out infinite;
`;

const photo2 = keyframes`
0%,33.33333%,100%{
transform: translate(0,0) ;
}
16.66667%{
transform: translate(0,-290px) ;
}
`;
const Img2 = styled.img`
  width: 290px;
  height: 290px;
  position: absolute;
  bottom: -290px;
  left: 0px;
  animation: ${photo2} 6s ease-in-out infinite;
  animation-delay: 2s;
`;

const photo3 = keyframes`
0%,33.33333%,100%{
transform: translate(0,0) ;
}
16.66667%{
transform: translate(280px,0) ;
}
`;

const Img3 = styled.img`
  width: 280px;
  height: 280px;
  position: absolute;
  bottom: 0;
  left: -280px;
  animation: ${photo3} 6s ease-in-out infinite;
  animation-delay: 4s;
`;

export const Logobox1 = () => {
  return (
    <Wrap>
      <Img1 src={img2} />
      <Img2 src={img2} />
      <Img3 src={img2} />
    </Wrap>
  );
};
