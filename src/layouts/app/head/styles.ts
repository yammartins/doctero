import styled from 'styled-components';

import { colors, easing } from '~/styles';

const {
  gray,
  primary,
} = colors;

const {
  basic,
} = easing;

const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .head {
    &-display {
      color: ${gray[600]};
      cursor: pointer;
      border: 1px solid ${gray[200]};
      padding: .75rem;
      transition: all .3s ${basic};
      border-radius: 3rem;

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
