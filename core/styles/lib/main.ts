import { css, createGlobalStyle } from 'styled-components';

import { button } from './components';
import typograph from './typograph';

const {
  family,
  weight,
} = typograph;

const body = css`
  font-family: ${family};
  font-weight: ${weight.regular};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const merge = [
  ...body,
  ...button,
];

const GlobalStyles = createGlobalStyle('', merge);

export default GlobalStyles;
