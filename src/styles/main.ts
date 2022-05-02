import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  body {
    scroll-behavior: smooth;
    width: 100%;
    height: 100vh;

    #__next {
      width: 100%;
      height: 100%;
    }
  }
`;

export default GlobalStyles;
