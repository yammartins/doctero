import { Context } from 'koa';

import { generate } from '../../auth';
import { User } from '../../database';
import { compare } from '../../helpers';

/**
 * Auth login handler.
 */
const auth = async (ctx: Context, next: () => Promise<void>): Promise<any> => {
  await next();

  const {
    email,
    password,
  } = ctx.request.body;

  const user = await User
    .findOne({
      email,
    })
    .select('+password')
    .lean();

  if (! user) ctx.throw(401, 'Esse e-mail não está registrado.');

  if (! await compare(password, user.password)) ctx.throw(401, 'Senha inválida.');

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

export default auth;
