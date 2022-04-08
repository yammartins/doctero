import { ReactNode, HTMLAttributes } from 'react';

type Aligns = 'left' | 'right' | 'center';

type Lines = {
  text: string | ReactNode,
  title?: string,
  isAction?: boolean,
};

export type TableRowsHandles = {
  id: string | number,
  lines: Lines[],
  onClick?: HTMLAttributes<HTMLTableRowElement>['onClick'],
};

export type TableHeaderHandles = {
  col?: number,
  text?: string | ReactNode,
  align?: Aligns,
  className?: string,
};

export interface TableHandles extends HTMLAttributes<HTMLTableElement> {
  rows: TableRowsHandles[] | null,
  size?: 'xs' | 'sm' | 'lg' | 'xl' | 'xxs' | 'base' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl',
  type?: 'auto' | 'fixed',
  empty?: string,
  theme?: 'gray' | 'dark' | 'light' | 'white',
  header: TableHeaderHandles[],
}
