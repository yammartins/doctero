import { config } from 'dotenv';
import { parse, resolve } from 'path';

import create from './create';

/**
 * Environment files map.
 */
const files = {
  default: '.env',
  testing: '.env.test',
};

const env = process.env.NODE_ENV;

let dir;

try {
  const path = require.resolve(__dirname);

  dir = parse(path).dir;
} catch (e) {
  dir = parse('./').dir;
}

/**
 * Get env from root directory.
 */
const path = resolve(dir, '../../../../', files[env] || files.default);

console.log('MY DIR', path);

/**
 * Set Environment variables.
 */
config({
  path,
});

/**
 * Create default env.
 */
const {
  get,
  mutate,
} = create({
  /**
   * Node env.
   */
  env: env || 'development',

  /**
   * API full url.
   */
  api_url: process.env.VUE_APP_API_URL,

  /**
   * The ping message used in /ping route.
   */
  ping: process.env.PING_MESSAGE,

  papertrail: {
    host: process.env.PAPERTRAIL_HOST,
    port: process.env.PAPERTRAIL_PORT,
  },

  mongo: {
    db: process.env.MONGO_DATABASE || 'doctero',
    uri: `mongodb://localhost:27017/${process.env.MONGO_DATABASE || 'doctero'}`,
  },

  hash: {
    rounds: Number(process.env.HASH_ROUNDS || 8),
  },

  secret: process.env.APP_SECRET,

  database: {
    slow_query_time: Number(process.env.SLOW_QUERY_TIME || 100),
  },

  backoffice: {
    port: process.env.BACKOFFICE_PORT || 5000,
  },

  redis: {
    default: {
      host: '127.0.0.1',
    },

    api: 0,
  },
});

/**
 * Export default getter.
 */
export default get;

export {
  mutate,
};
