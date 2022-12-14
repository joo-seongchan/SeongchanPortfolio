import styled, { keyframes } from "styled-components";
import img4 from "./img/img4.png";

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
transform: translate(0,0);
}
16.66667%{
transform: translate(0,300px);
}
`;

const Img1 = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  top: -300px;
  left: 0;
  animation: ${photo1} 6s ease-in-out infinite;
`;

const photo2 = keyframes`
0%,33.33333%,100%{
transform: translate(0,0);
}
16.66667%{
transform: translate(340px,0);
}
`;
const Img2 = styled.img`
  width: 340px;
  height: 340px;
  position: absolute;
  top: 0;
  left: -340px;
  animation: ${photo2} 6s ease-in-out infinite;
  animation-delay: 2s;
`;

const photo3 = keyframes`
0%,33.33333%,100%{
transform: translate(0,0);
}
16.66667%{
transform: translate(300px,0);
}
`;

const Img3 = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  left: -300px;
  animation: ${photo3} 6s ease-in-out infinite;
  animation-delay: 4s;
`;

export const Logobox3 = () => {
  return (
    <Wrap>
      <Img1 src={img4} />
      <Img2 src={img4} />
      <Img3 src={img4} />
    </Wrap>
  );
};
