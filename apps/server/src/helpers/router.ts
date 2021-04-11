import { Context } from 'koa';
import compose from 'koa-compose';

/**
 * Create a route handler passing validated data.
 */
 export const createRouteHandler = (handler: any, {
  schema = null,
  readonly = false,

  /**
   * Middlewares.
   */
  hooks: {
    /**
     * Run after handler.
     * Can't change request with sure.
     */
    post = [],
  } = {},
}) => compose([
  async (ctx: Context, next: () => Promise<void>) => {
    if ((readonly && ctx.method !== 'GET') || (! readonly && ctx.method !== 'POST')) {
      return;
    }

    ctx.status = 200;

    ctx.body = await next();

    return ctx.body;
  },

  async (ctx: Context, next: () => Promise<void>) => {
    const validated = schema
      ? ctx.validate(schema)
      : {};

    ctx.state = {
      ...ctx.state,
      ...validated,
    };

    return next();
  },

  handler,

  ...post,
]);

/**
 * Create router.
 */
export const createRouter = (req: Record<any ,any>): any => {
  /**
   * Route path to file.
   */
  const paths = req.keys().reduce((paths: any, path: any) => {
    const formated = path.replace('./', '/').replace('.js', '');

    /**
     * Ignore index.js files.
     */
    if (! formated.endsWith('index')) {
      paths[formated] = path;
    }

    return paths;
  }, {
    //
  });

  /**
   * Route cache.
   */
  const routes = {
    //
  };

  const handleRequest = async (ctx: Context, next: () => Promise<void>): Promise<void> => {
    const path = paths[ctx.path];
    const route = routes[path];

    console.log(path);

    if (typeof route === 'undefined') {
      try {
        const {
          handler,
          ...options
          // @ts-ignore
        } = req(path);

        if (! handler) {
          throw null;
        }

        routes[path] = createRouteHandler(handler, options);
      } catch (e) {
        routes[path] = false;
      }

      return handleRequest(ctx, next);
    }

    if (route) {
      const response = await route(ctx, next);

      if (response) {
        ctx.message = 'Ok';
        ctx.body = response;

        return;
      }
    }

    ctx.throw(404);
  };

  return handleRequest;
};
