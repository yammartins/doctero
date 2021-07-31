import styled from 'styled-components';

import { colors, easing } from '@core/styles';

const {
  gray,
} = colors;

const {
  rubber,
} = easing;

const View = styled.div`
  border: 1px solid ${gray[200]};
  transition: all .4s ${rubber};
`;

export default View;
