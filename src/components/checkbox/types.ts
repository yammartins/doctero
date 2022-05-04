import { InputHTMLAttributes } from 'react';

export interface CheckboxHandles extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  sizes: string,
  weight: string,
}
