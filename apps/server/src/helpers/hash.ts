import bcrypt from 'bcryptjs';

import config from './config';

/**
 * Encrypt text.
 */
export const encrypt = (text: string): Promise<string> => bcrypt.hash(text, config('hash.rounds'));

/**
 * Compare text with hash.
 */
export const compare = (text: string, hash: string): Promise<boolean> => bcrypt.compare(text, hash);

/**
 * Get a random hash.
 */
export const random = (): Promise<string> => encrypt((Date.now() * Math.random()).toString(36));
