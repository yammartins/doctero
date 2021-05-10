import { colors } from '@core/styles';
import styled from 'styled-components';

const {
  gray,
  primary,
} = colors;

const View = styled.div`
  .auth {
    &-form {
      .input:not(:first-of-type) {
        margin-top: 1.5rem;
      }

      .is-row > div {
        margin-top: 0 !important;
      }

      .is-tooltip {
        color: ${gray[400]};
        transition: all .3s ease-in-out;

        svg {
          width: 1.25rem;
          height: 1.25rem;
        }

        &:hover {
          color: ${gray[500]};
        }
      }

      .text-span {
        color: ${gray[400]};
        transition: all .3s ease-in-out;

        &:hover {
          color: ${primary[300]};
        }
      }

      .button {
        width: 100%;
        margin-top: 3rem;
        justify-content: center;
      }
    }

    &-title {
      color: ${gray[600]};

      .icon svg {
        width: 2rem;
        height: 2rem;
      }
    }

    &-footer .is-action {
      transition: all .3s ease-in-out;

      &:hover {
        color: ${primary[400]};
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
