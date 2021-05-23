export interface HeadHandles {
  title: string,
  display?: 'list' | 'grid',
  onDisplay?: (d: 'list' | 'grid') => void,
}
