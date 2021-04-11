import { Types } from 'mongoose';

export {
  info,
  warn,
  error,
  default as log,
} from './log';

export {
  default as config,
} from './config';

export {
  default as createSchemaRegister,
} from './schema';

/**
 * Cast a string or generate an ObjectId.
 */
 export const ObjectId = Types.ObjectId;
