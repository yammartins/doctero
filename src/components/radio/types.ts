import { InputHTMLAttributes, RefObject } from 'react';

export type RefInput = RefObject<HTMLInputElement[]>;

export interface RadioProps {
  name: string;
  options: {
    id: string,
    value: string,
    label: string,
  }[]
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & RadioProps;
