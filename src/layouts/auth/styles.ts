import styled, { css } from 'styled-components';

import { colors } from '~/styles';

import { StyledHandles } from './types';

const {
  gray,
  red,
  primary,
  success,
} = colors;

const View = styled.div<StyledHandles>`
  height: 100vh;
  display: flex;

  .auth {
    &-form {
      margin-top: 3rem;

      &-forgot {
        color: ${gray[500]};
        cursor: pointer;
        margin: 1rem 0 0 auto;
      }

      &-fields {
        display: flex;
        flex-direction: column;
      }

      &-signup {
        flex-direction: column;

        &.is-flex {
          display: flex;
        }

        &.is-hidden {
          display: hidden;
        }

        &-row {
          gap: 1.5rem;
          display: flex;
          margin-top: 1.5rem;
          align-items: center;

          > div {
            margin-top: 0 !important;
          }
        }

        &-checked {
          margin: 1.5rem 0;
          display: flex;
          align-items: center;
        }
      }

      .input:not(:first-of-type) {
        margin-top: 1.5rem;
      }

      .is-tooltip {
        color: ${gray[400]};
        margin-left: 1rem;
        transition: all .3s ease-in-out;

        &:hover {
          color: ${gray[500]};
        }
      }

      .text.is-sm {
        color: ${gray[400]};
        transition: all .3s ease-in-out;

        &:hover {
          color: ${primary[300]};
        }
      }

      .button {
        width: 100%;
        margin-top: 3rem;
        justify-content: center;
      }

      &-resend {
        cursor: pointer;
        transition: all .3s ease-in-out;
        margin-top: 1rem;

        &:hover {
          color: ${gray[600]} !important;
        }

        &-status {
          margin-top: 1rem;

          &.is-error {
            color: ${red[200]} !important;
          }

          &.is-success {
            color: ${success} !important;
          }
        }
      }
    }

    &-send {
      display: flex;
      margin-top: 3rem;
      flex-direction: column;

      &-form {
        margin-top: 3rem;
      }

      &-button {
        margin-top: 1.5rem;
      }
    }

    &-title {
      color: ${gray[600]};
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      .icon {
        cursor: pointer;
        margin-right: 1.5rem;
      }
    }

    &-footer {
      display: flex;
      margin-top: auto;
      align-items: center;
      flex-direction: column;

      .is-action {
        cursor: pointer;
        margin-top: .5rem;
        transition: all .3s ease-in-out;

        &:hover {
          color: ${primary[400]};
        }
      }
    }

    &-image {
      width: 100%;
      height: 100%;
      display: flex;
      position: relative;
    }

    &-wrapper {
      width: 100%;
      padding: 0 4rem 1.5rem 4rem;
      display: flex;
      max-width: 37rem;
      padding-top: 8rem;
      flex-direction: column;

      .text.is-md {
        color: ${gray[500]};
        white-space: break-spaces;
      }
    }

    &-error {
      color: ${red[200]} !important;
      display: flex;
      margin-top: 1rem;
      justify-content: center;
    }

    &-recovery {
      display: flex;
      flex-direction: column;

      &-submit {
        margin-top: 1.5rem;
      }
    }

    ${({ scroll }) => scroll && css`
      &-footer {
        margin-top: 4rem;
      }

      &-wrapper {
        overflow-y: auto;
        padding-top: 4rem;
      }
    `}
  }
`;

export default View;
