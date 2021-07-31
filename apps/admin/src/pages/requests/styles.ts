import styled from 'styled-components';

import { colors } from '@core/styles';

const {
  gray,
} = colors;

const View = styled.div`
  .requests {
    &-card {
      border: 1px solid ${gray[200]};

      .text-p {
        color: ${gray[400]};
      }
    }
  }
`;

export default View;
