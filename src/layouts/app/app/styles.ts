import { rgba } from '@uxoctopus/helpers';
import styled, { css } from 'styled-components';

import { colors, easing } from '~/styles';

const {
  gray,
  white,
  primary,
} = colors;

const {
  rubber,
} = easing;

interface Styles {
  drawer: boolean,
}

const View = styled.div<Styles>`
  .app {
    &-menu {
      width: 14rem;
      transition: all .6s ${rubber};
      background: ${gray[100]};
      border-right: 1px solid ${gray[200]};

      &-item {
        color: ${gray[400]};
        transition: all .3s cubic-bezier(0.86, 0, 0.07, 1);

        & > p {
          transition: all .6s ${rubber};
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

      &-button {
        background: ${gray[300]};
        border-color: ${gray[300]};

        &:focus,
        &:hover {
          background: ${gray[400]};
          border-color: ${gray[400]};
        }
      }

      &-profile {
        border-top: 1px solid ${gray[200]};

        &-picture {
          color: ${gray[400]};
          min-width: 3rem;
          background: ${gray[200]};
        }

        &-name {
          color: ${gray[600]};

          .text-span {
            color: ${gray[400]};
          }
        }

        &-dropdown .app-menu-profile-name {
          display: none;
          margin-bottom:.5rem;
        }

        .tooltip-wrapper {
          display: flex;
          align-items: center;
        }
      }
    }

    &-wrapper {
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
          justify-content: center;

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
