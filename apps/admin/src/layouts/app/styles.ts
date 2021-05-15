import { colors } from '@core/styles';
import styled from 'styled-components';

const {
  gray,
} = colors;

const View = styled.div`
  .app {
    &-menu {
      width: 14rem;
      background: ${gray[100]};
      border-right: 1px solid ${gray[200]};

      &-profile {
        border-top: 1px solid ${gray[200]};

        .tooltip {
          &-wrapper {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
`;

export default View;
