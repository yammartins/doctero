import { colors } from '@core/styles';
import styled from 'styled-components';

const {
  gray,
} = colors;

const View = styled.div`
  .auth {
    &-title {
      color: ${gray[600]};

      .icon svg {
        width: 2rem;
        height: 2rem;
      }
    }

    &-wrapper {
      max-width: 37rem;
      padding-top: 8rem;

      .text-p {
        color: ${gray[500]};
        white-space: break-spaces;
      }
    }
  }
`;

export default View;
