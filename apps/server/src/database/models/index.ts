import { createSchemaRegister } from '../../helpers';
import { Mongoose } from '../mongoose';
import user from './user';


/**
 * Schema register.
 */
const register = createSchemaRegister(Mongoose, {
  user,
});

/**
 * User model.
 */
 export const User = register('User');
