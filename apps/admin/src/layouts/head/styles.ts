import { colors, easing } from '@core/styles';
import styled from 'styled-components';

const {
  gray,
  primary,
} = colors;

const {
  basic,
} = easing;

const View = styled.div`
  .head {
    &-display {
      color: ${gray[600]};
      border: 1px solid ${gray[200]};
      transition: all .3s ${basic};

      &:hover {
        border-color: ${gray[300]};
      }

      &.is-grid {
        color: ${primary[300]};
        background: ${primary[100]};
        border-color: ${primary[100]};
      }
    }
  }
`;

export default View;
