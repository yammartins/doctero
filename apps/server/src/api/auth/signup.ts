import { Context } from 'koa';

import { User as Users } from '../../@types';
import { User } from '../../database';
import { encrypt } from '../../helpers';

/**
 * Auth signup handler.
 */
const signup = async (ctx: Context): Promise<any> => {
  const {
    name,
    phone,
    email,
    password,
  } = ctx.request.body as Users;

  await User.create({
    name,
    phone,
    email,
    password: await encrypt(password),
  })

  ctx.status = 201;
};

export default signup;
