import { InputHTMLAttributes } from 'react';
import { Props } from 'react-input-mask';

export type RefInputHandles = HTMLInputElement & HTMLTextAreaElement;

export interface InputBaseHandles extends Omit<Props, 'max' | 'mask' | 'type' | 'value'> {
  label?: string,
  how?: string,
  icon?: 'email' | 'password' | 'city' | string,
  mask?: Props['mask'],
  cols?: number,
  rows?: number,
  error?: string,
  fieldName?: string,
}

export type InputHandles = InputBaseHandles & JSX.IntrinsicElements['input'] & InputHTMLAttributes<RefInputHandles>;

export type FormHandles = InputHandles & {
  name: string,
};
