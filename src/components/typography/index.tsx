import classNames from 'classnames';
import { useCallback } from 'react';
import { TextHandles } from './types';

const Text: React.FC<TextHandles> = ({
  type,
  size = 'base',
  align = 'left',
  weight = 'normal',
  family = 'inter',
  children,
  className,
  ...rest
}) => {
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    black: 'font-black',
  };

  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    md: 'text-md',
    xmd: 'text-xmd',
    lg: 'text-lg',
    xlg: 'text-xlg',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  };

  const aligns = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const families = {
    inter: 'font-inter',
    jakarta: 'font-jakarta',
  };

  const styled = classNames(
    'main-text',
    weights[weight],
    sizes[size], 
    aligns[align],
    families[family],
    className,
  );

  const Text = useCallback(() => {
    if (type === 'p') return <p {...rest} className={styled}>{label || children}</p>;
  }, []);

  return <p className="">Declarar.</p>;
};

export default Text;
