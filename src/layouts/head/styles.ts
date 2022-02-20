import styled from 'styled-components';

import { colors, typograph } from '~/styles';

const {
  gray,
  primary,
} = colors;

const {
  weight,
} = typograph;

const View = styled.nav`
  width: 100%;
  padding: 2rem 0;
  position: fixed;

  .head {
    &-menu {
      gap: 2rem;
      display: flex;
      margin-left: 3rem;
      align-items: center;

      a {
        color: ${gray[600]};
        transition: all .3s ease-in-out;
        font-weight: ${weight.semiBold};

        &:hover {
          color: ${primary[300]};
        }
      }
    }

    &-wrapper {
      display: flex;
      align-items: center;
    }

    &-actions {
      gap: 1rem;
      display: flex;
      align-items: center;
      margin-left: auto;
    }
  }
`;

export default View;
