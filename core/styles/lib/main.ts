import { rgba } from '@uxoctopus/helpers';
import { createGlobalStyle } from 'styled-components';

import colors from './colors';
import typograph from './typograph';

const {
  gray,
  white,
  danger,
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

  .radio,
  .checkbox {
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

    &.is-checked .checkbox-box,
    input[type=checkbox]:checked + span {
      background: ${primary[300]};

      svg {
        color: ${white};
      }
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
    position: relative;

    &-icon,
    &-label {
      color: ${gray[400]};
    }

    &.is-error & {
      &-label {
        color: ${danger};
      }

      &-target {
        background: ${rgba(danger, '.04')};
        border-color: ${danger};
      }
    }

    &-error {
      color: ${danger};
      bottom: -1.5rem;
      position: absolute;
    }

    &-target {
      color: ${gray[600]};
      border-color: ${rgba(gray[300], '.32')};
    }

    &-label,
    &-target {
      transition: all .3s ease-out;
    }

    &:hover:not(.is-error) & {
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

  .tooltip {
    &-bubble {
      background: ${gray[600]};
    }
  }

  .multi-radio {
    position: relative;
  }
`;

export default GlobalStyles;
