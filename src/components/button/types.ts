import { ButtonHTMLAttributes } from 'react';

export interface ButtonHandles extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'base' | 'lg' | string,
  full?: boolean,
  submit?: boolean,
  label: string,
  loading?: boolean,
  disabled?: boolean,
  appearance?: 'primary' | 'secondary' | 'tertiary' | 'outline',
  icon?: string,
}
