import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 14px;
  }

  body {
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, "Sans Serif";
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    background-color: #EAEAEA;
    color: #202020;
    height: 100%;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
