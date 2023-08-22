import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
  }

  body {
    ${(props) => css`
      background: ${props.theme.backgroundColor};
      color: ${props.theme.textColor};
    `}

    font-family: sans-serif;
  }
`;
