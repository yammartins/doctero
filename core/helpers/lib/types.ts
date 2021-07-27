export type CookieHandles = (
  type?: 'user' | 'email',
  method?: 'get' | 'set' | 'remove',
  data?: any,
  time?: number,
) => any;
