export interface Handles {
  type?: 'auth' | 'signup',
  error?: null | number,
  title?: string,
  scroll?: boolean,
  description?: string,
}

export interface StyledHandles {
  scroll: boolean,
}
