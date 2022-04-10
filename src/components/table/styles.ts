import styled from 'styled-components';

import { colors } from '~/styles';

const {
  white,
  black,
  gray,
} = colors;

const View = styled.div`
 .table {
   border-radius: 0.5rem;
   border: 1px solid ${gray[100]};
   background-color: ${white},
 }
`;

export default View;
