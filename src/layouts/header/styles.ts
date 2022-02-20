import styled from 'styled-components';

import { colors } from '~/styles';

const {
  gray,
} = colors;

const View = styled.div`
  height: 100vh;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .header {
    &-image,
    &-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
    }

    &-image {
      position: relative;
      max-width: 36rem;
      max-height: 24.5rem;
      align-items: center;

      & > div {
        width: 100%;
      }
    }

    &-wrapper {
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;

      .text {
        &.is-md {
          color: ${gray[400]};
          max-width: 24rem;
          margin: 1.25rem 0 4rem 0;
        }

        &.is-5xl {
          max-width: 36rem;
        }
      }
    }
  }
`;

export default View;
