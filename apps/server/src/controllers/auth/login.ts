import Joi from 'joi';
import { Context } from 'koa';

import { generate } from '../../auth';
import { User } from '../../database';

/**
 * Auth login handler.
 *
 * @todo analytic login.success login.attempt
 */
export const auth = async (ctx: Context, next: () => Promise<void>): Promise<any> => {
  await next();

  const {
    email,
  } = ctx.request.body;

  const user = await User
    .findOne({
      email,
    })
    .select('+password')
    .lean();

  const {
    _id,
  } = user;

  ctx.status = 200;

  ctx.body = {
    token: generate({
      _id,
      email,
    }),
  };
};

/**
 * Auth login schema.
 */
export const schema = Joi
  .object()
  .keys({
    email: Joi.string().email().max(60).required(),
    password: Joi.string().min(6).max(254).required(),
  })
  .required();
