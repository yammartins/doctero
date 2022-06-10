import { InputHTMLAttributes } from "react";

export interface CheckboxHandles {
  label?: string;
  name: string;
  value?: string;
}

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> &
  CheckboxHandles;
