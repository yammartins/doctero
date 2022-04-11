import {
  ReactNode, HTMLAttributes, SetStateAction, Dispatch,
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

export interface TableHandles extends HTMLAttributes<HTMLTableElement> {
  rows: TableRowsHandles[] | null,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl',
  type?: 'auto' | 'fixed',
  empty?: string,
  theme?: 'gray' | 'dark' | 'light' | 'white',
  header: TableHeaderHandles[],
  show: boolean;
  onShow?: Dispatch<SetStateAction<boolean>>;
  onClick?: () => void;
}
