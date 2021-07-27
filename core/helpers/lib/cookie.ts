import cookies from 'js-cookie';

import { CookieHandles } from './types';

const cookie: CookieHandles = (
  type = 'user',
  method = 'get',
  data,
  time = 1,
) => {
  /**
   * Prefix cookie.
   */
  const TOKEN = `@app-${type}`;

  switch (method) {
    case 'get':
      return cookies.get(TOKEN);

    case 'set':
      return cookies.set(TOKEN, JSON.stringify(data), { expires: time });

    case 'remove':
      return cookies.remove(TOKEN);

    default:
      return null;
  }
};

export default cookie;
