import { colors, typograph } from '@core/styles';
import { rgba } from '@uxoctopus/helpers';
import styled from 'styled-components';

const {
  gray,
  white,
  primary,
} = colors;

const {
  weight,
} = typograph;

interface Styles {
  drawer: boolean,
}

const View = styled.div<Styles>`
  .app {
    &-menu {
      width: 14rem;
      background: ${gray[100]};
      border-right: 1px solid ${gray[200]};

      &-item {
        color: ${gray[500]};
        transition: all .3s cubic-bezier(0.86, 0, 0.07, 1);
        font-weight: ${weight.medium};

        &:focus,
        &:hover {
          color: ${primary[300]};
          background: ${primary[100]};
        }

        &.active {
          color: ${white};
          z-index: 2;
          background: ${primary[300]};
          box-shadow: 0 .75rem 1.5rem ${rgba(primary[300], '.56')};
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

        &-name {
          color: ${gray[600]};

          .text-span {
            color: ${gray[400]};
          }
        }

        .tooltip-wrapper {
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;

export default View;
