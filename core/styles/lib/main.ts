import { createGlobalStyle } from 'styled-components';

import typograph from './typograph';

const {
  family,
  weight,
} = typograph;

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${family};
    font-weight: ${weight.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
