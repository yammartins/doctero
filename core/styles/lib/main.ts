import { rgba } from '@uxoctopus/helpers';
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

  .radio {
    &-box {
      border-color: ${gray[400]};
    }

    &-label {
      color: ${gray[400]};
    }

    &-box,
    &-label {
      transition: all .3s ease-out;
    }

    &.is-checked .radio-box::after,
    input[type=radio]:checked + span::after {
      background: ${gray[600]}
    }

    &:hover & {
      &-box {
        border-color: ${gray[500]};
      }

      &-label {
        color: ${gray[500]};
      }
    }
  }

  .input {
    &-icon,
    &-label {
      color: ${gray[400]};
    }

    &-target {
      color: ${gray[600]};
      border-color: ${rgba(gray[300], '.32')};
    }

    &-label,
    &-target {
      transition: all .3s ease-out;
    }

    &:hover & {
      &-label {
        color: ${gray[500]};
      }

      &-target {
        border-color: ${gray[300]};
      }
    }
  }

  .button {
    color: ${white};
    border: 1px solid transparent;
    display: flex;
    box-shadow: none;
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
        box-shadow: 0 1rem 1.5rem ${rgba(primary[300], '.08')};
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
