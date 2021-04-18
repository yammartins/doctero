import { createGlobalStyle } from 'styled-components';

import { colors, typograph } from './index';

const {
  gray,
  white,
  primary,
} = colors;

const {
  family,
  weight,
} = typograph;

const GlobalStyles = createGlobalStyle`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${gray[600]};
  }

  body {
    font-family: ${family};
    font-weight: ${weight.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .button {
    color: ${white};
    border: 1px solid transparent;
    display: flex;
    transition: all .3s ease-in-out;
    align-items: center;
    font-weight: ${weight.semiBold};

    &.is-md {
      padding: 1rem 2.5rem;
    }

    &.is-primary {
      background: ${primary[300]};
      border-color: ${primary[300]};

      &:hover {
        background: ${primary[400]};
      }
    }

    &.is-secondary {
      color: ${gray[400]};
      border-color: ${gray[300]};

      &:hover {
        color: ${gray[600]};
        border-color: ${gray[400]};
      }
    }
  }
`;

export default GlobalStyles;
