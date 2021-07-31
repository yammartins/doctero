import styled from 'styled-components';

import { colors } from '@core/styles';

const {
  gray,
} = colors;

const View = styled.div`
  .users {
    .card {
      .text-p {
        color: ${gray[400]};
      }
    }
  }
`;

export default View;
