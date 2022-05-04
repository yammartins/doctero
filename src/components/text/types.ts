import { HTMLAttributes } from 'react';

export interface TextHandles extends HTMLAttributes<HTMLTitleElement | HTMLHeadingElement> {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'small' | string,
  size?: 'xs' | 'sm' | 'base' | 'md' | 'xlg' | 'lg' | '2xl' | '3xl' | string,
  weight?: '400' | '500' | '600' | '700' | string,
  align?: 'right' | 'center' | 'left',
  label?: string,
  family?: 'poppins' | 'roboto',
  className?: string,
}
