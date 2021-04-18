import { colors, typograph } from '@core/styles';
import { Button } from '@uxoctopus/core';
import styled from 'styled-components';

const {
  gray,
  white,
  primary,
} = colors;

const {
  weight,
} = typograph;

const View = styled(Button)`
  color: ${white};
  border: 1px solid transparent;
  display: flex;
  transition: all .3s ease-in-out;
  align-items: center;
  font-weight: ${weight.semiBold};

  &.is-md {
    padding: 1rem 2.5rem;
  }

  &.is-primary {
    background: ${primary[300]};
    border-color: ${primary[300]};

    &:hover {
      background: ${primary[400]};
    }
  }

  &.is-secondary {
    color: ${gray[400]};
    border-color: ${gray[300]};

    &:hover {
      color: ${gray[600]};
      border-color: ${gray[400]};
    }
  }
`;

export default View;
