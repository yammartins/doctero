import { dot } from './dot';
import { Get, Config, Mutate } from './types';

/**
 * Create the env object.
 */
export default (config: Record<any, any>): Config => {
  /**
   * Env getter.
   */
  const get: Get = (key, def = null) => {
    const value = dot(config, key, def, true) as string;

    if (typeof value == 'undefined') {
      throw new RangeError(`Config key "${key}" doesn't exists, did you compiled the config package?`);
    }

    return value;
  };

  /**
   * Mutate config.
   * Please, do not use it.
   */
  const mutate: Mutate = (callback) => callback(config);

  return {
    get,
    mutate,
  };
};
