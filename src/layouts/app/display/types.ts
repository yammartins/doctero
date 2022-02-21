import { HTMLAttributes } from 'react';

export type DisplayHandles = 'list' | 'grid';

export interface ViewHandles extends HTMLAttributes<HTMLDivElement> {
  display: DisplayHandles,
}

export interface LayoutHandles {
  display: DisplayHandles,
}
