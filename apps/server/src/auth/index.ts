import JWT from 'jsonwebtoken';
import { Context } from 'koa';

import { User as Users } from '../@types';
import { User } from '../database';
import { config, ObjectId } from '../helpers';
import Forbidden from './forbidden';
import Unauthorized from './unauthorized';

/**
 * JWT secret.
 */
const secret = config('secret');

/**
 * Resolve token from header.
 */
export const getToken = (ctx: Context): string => {
  if (! ctx.headers || ! ctx.headers.authorization) {
    throw new Unauthorized();
  }

  const splitted = ctx.headers.authorization.split(' ');

  if (splitted.length !== 2
      || splitted[0] !== 'Bearer'
      || ! splitted[1]
  ) {
    throw new Unauthorized('Bad Authorization header format. Format is "Authorization: Bearer <token>"');
  }

  return splitted[1];
};

/**
 * Verify JWT token.
 */
export const verifyToken = (token: string, secret: string): any => {
  try {
    return JWT.verify(token, secret);
  } catch (e) {
    //
  }

  throw new Unauthorized();
};

/**
 * Generate JWT token.
 */
export const generate = (payload: Users): string => JWT.sign(payload, secret);

/**
 * Authentication middleware.
 */
export const AuthMiddleware = () => async (ctx: Context, next: () => Promise<any>): Promise<any> => {
  const token = getToken(ctx);

  /**
   * Verify token and set user property in state.
   */
  const decoded = verifyToken(token, secret) as Users;

  const user = await User.findOne({
    _id: decoded._id,
  })
    .lean()
    .orFail();

  ctx.state.auth = {
    ...user,

    /**
     * Here we set userId just to be use to desconstruct from.
     */
    userId: ObjectId(decoded._id),
  };

  return next();
};

/**
 * Authorization middleware.
 */
export const AuthorizeMiddleware = (authorize: (id: any, state: any) => any) => async (ctx: Context, next: () => Promise<any>) => {
  const response = await authorize(ctx.state.auth.userId.toString(), ctx.state);

  if (response === true) {
    return next();
  }

  throw new Forbidden();
};

/**
 * Export gate methods.
 */
export {
  default as createGatter,
} from './gate';

export {
  Forbidden,
  Unauthorized,
};
