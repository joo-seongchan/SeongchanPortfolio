import styled, { keyframes } from "styled-components";
import img3 from "./img/img3.png";
import img1 from "./img/img1.png";

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
transform: translate(-290px,0) ;
}
`;

const Img1 = styled.img`
  width: 290px;
  height: 290px;
  position: absolute;
  top: 0;
  right: -290px;
  animation: ${photo1} 6s ease-in-out infinite;
`;

const photo2 = keyframes`
0%,33.33333%,100%{
transform: translate(0,0) ;
}
16.66667%{
transform: translate(0,300px) ;
}
`;
const Img2 = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  top: -300px;
  right: 0px;
  animation: ${photo2} 6s ease-in-out infinite;
  animation-delay: 2s;
`;

const photo3 = keyframes`
0%,33.33333%,100%{
transform: translate(0,0) ;
}
16.66667%{
transform: translate(-300px,0) ;
}
`;

const Img3 = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  right: -300px;
  animation: ${photo3} 6s ease-in-out infinite;
  animation-delay: 4s;
`;

export const Logobox2 = () => {
  return (
    <Wrap>
      <Img1 src={img3} />
      <Img2 src={img3} />
      <Img3 src={img3} />
    </Wrap>
  );
};
