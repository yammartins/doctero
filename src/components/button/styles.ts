import styled from 'styled-components';

import { typograph, colors } from '~/styles';

const {
  family,
  sizes,
} = typograph;

const {
  white,
  gray,
  blue,
} = colors;

const View = styled.div`

  .button {
    display: flex;
    position: relative;
    padding: 1rem 0;
    font-size: 600 ${sizes.base} ${family.bodoni};

    .loading {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border: 0.125rem solid ${gray[300]};
      border-radius: 50%;
      border-top-color: ${white};
      animation: spin 1.2s ease-in-out infinite;
      -webkit-animation: spin 1.2s ease-in-out infinite;
    }

    @keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }

    &.is-full {
      width: 100%;
    }

    &.is-primary {
      background-color: ${blue[500]};
      color: ${white};
    }
  }
`;

export default View;
