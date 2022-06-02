import classNames from 'classnames';
import { useCallback } from 'react';
import { TextHandles } from './types';

const Text: React.FC<TextHandles> = ({
  type = 'p',
  label,
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
    if (type === 'small') return <small {...rest} className={styled}>{label || children}</small>;
    if (type === 'span') return <span {...rest} className={styled}>{label || children}</span>;
    if (type === 'strong') return <strong {...rest} className={styled}>{label || children}</strong>;
    if (type === 'h1') return <h1 {...rest} className={styled}>{label || children}</h1>;
    if (type === 'h2') return <h2 {...rest} className={styled}>{label || children}</h2>;
    if (type === 'h3') return <h3 {...rest} className={styled}>{label || children}</h3>;
    if (type === 'h4') return <h4 {...rest} className={styled}>{label || children}</h4>;
    if (type === 'h5') return <h5 {...rest} className={styled}>{label || children}</h5>;
    if (type === 'h6') return <h6 {...rest} className={styled}>{label || children}</h6>;

    return <p />;

  }, [label, children, type, styled]);

  return <Text />;
};

export default Text;
