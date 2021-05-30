import { createGlobalStyle } from "styled-components";
import reset from "Styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Noto Sans, Noto Sans KR;
  }
`;

export default GlobalStyle;