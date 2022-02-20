import styled from 'styled-components';

import { colors } from '~/styles';

const {
  gray,
} = colors;

const View = styled.div`
  .header {
    &-image,
    &-wrapper {
      display: flex;
    }

    &-image {
      width: 100%;
      align-items: center;

      & > div {
        width: 100%;
      }
    }

    &-wrapper {
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;

      .text-p {
        color: ${gray[400]};
        max-width: 24rem;
      }

      .text-h1 {
        max-width: 36rem;
      }
    }
  }

  .container .row {
    height: 100%;

    .col {
      display: flex;
    }
  }
`;

export default View;
