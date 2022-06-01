import { ButtonHTMLAttributes } from "react";

export interface ButtonHandles extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: "xs" | "sm" | "md" | "base" | "lg" | string;
  appearance?: "primary" | "secondary" | "tertiary" | "outline" | string;
  full?: boolean;
  icon?: string;
  submit?: boolean;
  loading?: boolean;
  disabled?: boolean;
}
