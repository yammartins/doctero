export type DisplayHandles = 'list' | 'grid';

export interface ViewHandles {
  display: DisplayHandles,
  className?: string,
}

export interface LayoutHandles {
  display: DisplayHandles,
}
