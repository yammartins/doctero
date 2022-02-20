import styled from 'styled-components';

import { colors } from '~/styles';

const {
  gray,
} = colors;

const View = styled.div`
  .requests {
    .card {
      .text-p {
        color: ${gray[400]};
      }
    }
  }
`;

export default View;
