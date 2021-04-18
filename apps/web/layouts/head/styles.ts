import { colors, typograph } from '@core/styles';
import styled from 'styled-components';

const {
  gray,
  primary,
} = colors;

const {
  weight,
} = typograph;

const View = styled.nav`
  .head {
    &-menu a {
      color: ${gray[600]};
      transition: all .3s ease-in-out;
      font-weight: ${weight.semiBold};

      &:hover {
        color: ${primary[300]};
      }
    }
  }
`;

export default View;
