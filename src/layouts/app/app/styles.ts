import { rgba } from '@uxoctopus/helpers';
import styled, { css } from 'styled-components';

import { colors, easing } from '~/styles';

import { StyledHandles } from './types';

const {
  gray,
  white,
  primary,
} = colors;

const {
  rubber,
} = easing;

const View = styled.div<StyledHandles>`
  height: 100%;
  display: flex;
  position: relative;

  .app {
    &-menu {
      width: 14rem;
      height: 100vh;
      display: flex;
      padding: 1.5rem;
      position: fixed;
      transition: all .6s ${rubber};
      background: ${gray[100]};
      border-right: 1px solid ${gray[200]};
      flex-direction: column;

      &-logo {
        width: 100%;
      }

      &-item {
        color: ${gray[400]};
        display: flex;
        padding: .5rem;
        position: relative;
        transition: all .3s cubic-bezier(0.86, 0, 0.07, 1);
        align-items: center;
        border-radius: .5rem;

        .icon {
          margin-right: 1rem;
        }

        & > p {
          left: 0;
          opacity: 1;
          position: relative;
          transition: all .6s ${rubber};
          white-space: nowrap;
        }

        &:focus,
        &:hover {
          color: ${primary[300]};
          background: ${primary[100]};
        }

        &.active {
          color: ${white};
          z-index: 2;
          background: ${primary[300]};
          box-shadow: 0 1rem 1.5rem ${rgba(primary[300], '.24')};
        }
      }

      &-items {
        gap: 1.25rem;
        display: flex;
        margin-top: 6rem;
        flex-direction: column;
      }

      &-button {
        right: -1.25rem;
        bottom: 6rem;
        z-index: 10;
        position: absolute;
        background: ${gray[300]};
        border-color: ${gray[300]};

        &:focus,
        &:hover {
          background: ${gray[400]};
          border-color: ${gray[400]};
        }
      }

      &-profile {
        margin-top: auto;
        border-top: 1px solid ${gray[200]};
        padding-top: 1.5rem;

        .tooltip {
          cursor: pointer;
          z-index: 50;
        }

        &-picture {
          width: 3rem;
          color: ${gray[400]};
          height: 3rem;
          display: flex;
          min-width: 3rem;
          background: ${gray[200]};
          align-items: center;
          border-radius: 10rem;
          justify-content: center;
        }

        &-name {
          color: ${gray[600]};
          white-space: nowrap;
          margin-left: .75rem;

          .text.is-sm {
            color: ${gray[400]};
          }
        }

        &-dropdown {
          gap: .75rem;
          display: flex;
          flex-direction: column;

          .app-menu-profile-name {
            display: none;
            margin-bottom:.5rem;
          }
        }

        .tooltip-wrapper {
          display: flex;
          align-items: center;
        }
      }
    }

    &-wrapper {
      width: 100%;
      height: 100%;
      padding: 3.5rem;
      transition: all .6s ${rubber};
      padding-left: 18rem;
    }

    ${({ drawer }) => drawer && css`
      &-menu {
        width: 5rem;
        padding: 1.5rem 1rem;

        &-button {
          transform: rotate(-180deg);
        }

        &-items .app-menu-item {
          min-height: 3rem;
          justify-content: center;

          .icon {
            font-size: 1.5rem;
            margin-right: 0;
          }

          > p {
            left: -1rem;
            opacity: 0;
            position: absolute;
            pointer-events: none;
          }
        }

        &-profile {
          &-name {
            display: none;
          }

          &-picture .icon {
            font-size: 1.5rem;
          }

          &-dropdown .app-menu-profile-name {
            display: block;
          }
        }
      }

      &-wrapper {
        padding-left: 9rem;
      }
    `}
  }
`;

export default View;
