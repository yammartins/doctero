import { Context } from 'koa';

/**
 * Error handler middleware.
 */
const handler = async (
  ctx: Context,
  next: () => Promise<void>,
): Promise<void> => {
  try {
    await next();
  } catch (err) {
    ctx.status = Number(err.status || err.statusCode || 500);
    ctx.body = { error: err.message };
  }
};

export default handler;
