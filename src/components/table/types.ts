import {
  ReactNode, HTMLAttributes,
} from 'react';

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

type DetailHandles = {
  id: number,
  name: string,
  email: string,
  types: string,
  position: string,
  CPF: string,
  address: string,
  phone: string,
};

export type CustomRows = TableRowsHandles & {
  details: DetailHandles[] | null,
};

export interface TableHandles extends HTMLAttributes<HTMLTableElement> {
  rows: CustomRows[],
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl',
  type?: 'auto' | 'fixed',
  empty?: string,
  theme?: 'gray' | 'dark' | 'light' | 'white',
  header: TableHeaderHandles[],
  open?: boolean,
}
