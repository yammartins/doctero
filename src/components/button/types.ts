import { ReactNode, ButtonHTMLAttributes } from "react"

export interface ButtonHandles extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  size?: 'xs' | 'sm' | 'md' | 'base' | 'lg' | string,
  appearance?: 'primary' | 'secondary' | 'tertiary' | 'outline' | string,
  full?: boolean,
  loading?: boolean,
}
