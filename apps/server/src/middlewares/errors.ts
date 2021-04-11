import { Context } from 'koa';

import { info, error } from '../helpers';
import { Listener } from './types';

/**
 * Error handler listener.
 */
export const listener = ({
  name,
  status,
  message,
}: Listener): void => {
  const text = `${name} "${message}"`;

  if (! status || status === 500) {
    error(text);

    return;
  }

  info(text);
};

/**
 * Error handler middleware.
 */
export const handler = async (ctx: Context, next: () => Promise<void>): Promise<void> => {
  try {
    await next();
  } catch (error) {
    if (error.status === 404) {
      ctx.status = 404;
      ctx.message = 'Not Found';

      ctx.body = {
        error: 'Not Found',
      };

      return;
    }

    ctx.status = error.status || 500;

    ctx.body = ctx.status === 500
      ? 'Internal Server Error'
      : ctx.body || error.message;

    ctx.app.emit('error', error, ctx);
  }
};
