import { rgba } from '@uxoctopus/helpers';
import TTF from '@uxoctopus/icons/fonts/uxoctopus.ttf';
import WOFF from '@uxoctopus/icons/fonts/uxoctopus.woff';
import { createGlobalStyle } from 'styled-components';

import colors from './colors';
import typograph from './typograph';

const {
  gray,
  white,
  red,
  primary,
} = colors;

const {
  family,
  weight,
} = typograph;

const GlobalStyles = createGlobalStyle`
  /**
   * Import icons
   */
   @font-face {
    src:
      url(${TTF}) format('truetype'),
      url(${WOFF}) format('woff');
    font-style: normal;
    font-weight: normal;
    font-family: 'uxoctopus';
    font-display: block;
  }

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
    background: ${gray[500]}
  }

  /**
   * Radio and Checkbox.
   */
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
      color: ${white} !important;
      background: ${primary[300]};
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

  /**
   * Input.
   */
  .input {
    position: relative;

    &-icon,
    &-label {
      color: ${gray[400]};
    }

    &-icon {
      font-size: 1.25rem !important;
    }

    &.is-error & {
      &-label {
        color: ${red[200]};
      }

      &-target {
        background: ${rgba(red[200], '.04')};
        border-color: ${red[200]};
      }
    }

    &-error {
      color: ${red[200]};
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

  /**
   * Button.
   */
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

  /**
   * Tooltip.
   */
  .tooltip {
    &-bubble {
      border: 1px solid ${gray[100]};
      background: ${gray[100]};

      & > p {
        color: ${gray[400]};
        font-weight: ${weight.medium};
      }

      &.is-top:before {
        bottom: -0.5rem;
        border-top-color: ${primary[100]};
      }

      &.is-right:before {
        border-right-color: ${primary[100]};
      }
    }
  }

  /**
   * Multi radio.
   */
  .multi-radio {
    position: relative;
  }

  /**
   * Scroll.
   */
   .is-scroll {
    ::-webkit-scrollbar {
      width: .25rem;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${gray[300]};
      border-radius: 1rem;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${gray[400]};
    }
   }
`;

export default GlobalStyles;
