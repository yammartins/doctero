import styled, { css } from 'styled-components';

import { easing } from '~/styles';

import { LayoutHandles } from './types';

const {
  rubber,
} = easing;

const View = styled.div<LayoutHandles>`
  gap: 1.5rem;
  display: flex;
  margin-top: 3rem;
  transition: all .4s ${rubber};
  flex-direction: column;

  ${({ display }) => display === 'grid' && css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `}
`;

export default View;
