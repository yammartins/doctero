import { colors } from '@core/styles';
import styled from 'styled-components';

const {
  gray,
} = colors;

const View = styled.div`
  .app {
    &-menu {
      width: 12rem;
      background: ${gray[100]};
      border-right: 1px solid ${gray[200]};
    }
  }
`;

export default View;
