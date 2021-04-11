import { Context } from 'koa';

import { config } from '../helpers';

/**
 * Ping handler.
 */
export const handler = async (_: Context, next: () => Promise<void>): Promise<{
  message: string;
}> => {
  await next();

  return {
    message: config('ping'),
  };
};

/**
 * Get request.
 */
export const readonly = true;
