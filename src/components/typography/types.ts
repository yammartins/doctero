import { ReactNode, HTMLAttributes } from 'react';

export interface TextHandles extends HTMLAttributes<HTMLTitleElement & HTMLHeadingElement> {
  type?: 'p' | 'small' | 'span' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'base' | 'md' | 'xmd' | 'lg' | 'xlg' | '2xl' | '3xl' | '4xl';
  align?: 'right' | 'center' | 'left';
  children?: ReactNode;
  label?: string;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'black';
  family?: 'jakarta' | 'inter';
  className?: string;
}
