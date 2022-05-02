import styled from 'styled-components';

const sizes = {
  xs: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  sm: {
    fontSize: '14px',
    lineHeight: '24px',
  },
  base: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  md: {
    fontSize: '20px',
    lineHeight: '30px',
  },
  xlg: {
    fontSize: '24px',
    lineHeight: '40px',
  },
  lg: {
    fontSize: '32px',
    lineHeight: '40px',
  },
  '2xl': {
    fontSize: '40px',
    lineHeight: '48px',
  },
  '3xl': {
    fontSize: '48px',
    lineHeight: '64px',
  },
};

const weights = {
  400: '400',
  500: '500',
  600: '600',
  700: '700',
};

const aligns = {
  right: 'right',
  center: 'center',
  left: 'left',
};

const families = {
  poppins: 'Poppins, sans-serif',
  roboto: 'Roboto, sans-serif',
};

const View = styled.p`
 font-size: ${({ size = 'base' }) => sizes[size].fontSize};
 font-weight: ${({ weight = '400' }) => weights[weight]};
 line-height: ${({ size = 'base' }) => sizes[size].lineHeight};
 text-align: ${({ align = 'left ' }) => aligns[align]};
 font-family: ${({ family = 'roboto' }) => families[family]};
`;

export default View;
