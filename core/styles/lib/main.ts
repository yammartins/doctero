import '@uxoctopus/styles';
import { createGlobalStyle } from 'styled-components';

import typograph from './typograph';

const {
  family,
  weight,
} = typograph;

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('~@core/assets/fonts/Inter-Regular.woff2') format('woff2'),
        url('~@core/assets/fonts/Inter-Regular.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('~@core/assets/fonts/Inter-Medium.woff2') format('woff2'),
        url('~@core/assets/fonts/Inter-Medium.woff') format('woff');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('~@core/assets/fonts/Inter-SemiBold.woff2') format('woff2'),
        url('~@core/assets/fonts/Inter-SemiBold.woff') format('woff');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('~@core/assets/fonts/Inter-Bold.woff2') format('woff2'),
        url('~@core/assets/fonts/Inter-Bold.woff') format('woff');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('~@core/assets/fonts/Inter-ExtraBold.woff2') format('woff2'),
        url('~@core/assets/fonts/Inter-ExtraBold.woff') format('woff');
    font-style: normal;
    font-weight: 800;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url('~@core/assets/fonts/Inter-Black.woff2') format('woff2'),
        url('~@core/assets/fonts/Inter-Black.woff') format('woff');
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }

  body {
    font-family: ${family};
    font-weight: ${weight.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
