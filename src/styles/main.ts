import { createGlobalStyle } from 'styled-components';

import colors from './colors';
import typography from './typograph';

const {
  gray,
} = colors;

const {
  family,
  sizes,
} = typography;

const GlobalStyles = createGlobalStyle`

/**
* Text types
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${family.poppins};
}

h1 {
  font: 700 ${sizes['3xl']};
}

h2 {
  font: 700 ${sizes['2xl']};
}

h3 {
  font: 700 ${sizes.lg};
}

h4 {
  font: 600 ${sizes.xlg};
}

h5 {
  font: 600 ${sizes.md}
}

/**
* Body and main changes
*/

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${gray[200]};
}

`;

export default GlobalStyles;
