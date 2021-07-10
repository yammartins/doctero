export interface Handles {
  type?: 'auth' | 'signup',
  error?: boolean,
  title?: string,
  scroll?: boolean,
  description?: string,
}

export interface StyledHandles {
  scroll: boolean,
}
