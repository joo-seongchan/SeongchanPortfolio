import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainstyle = {
  padding: "0 350px",
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
body{
    color: white;
    letter-spacing: -1px;
    font-family: 'Noto Sans KR', sans-serif;
    background: linear-gradient(to left, rgba(0,0,0,1),rgba(50,50,50,1),rgba(0,0,0,1) );
}
a{
    text-decoration: none;
    color: white;
}

`;
