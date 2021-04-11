import Mongoose, { Schema, Types } from 'mongoose';

import { info, error, config } from '../helpers';
import LogSlowQueries from './logSlowQueries';

Mongoose.plugin(LogSlowQueries);

info('Setting up Mongoose');

Mongoose.set('debug', false);

Mongoose.SchemaTypes.String.set('trim', true);

Mongoose.connection.on('open', () => info('Mongoose connection opened'));

Mongoose.connection.on('connected', () => info(`Mongoose connected to ${config('mongo.db')}!`));

Mongoose.connection.on('error', (err) => error(`Mongoose error ${err}`));

Mongoose.connection.on('disconnected', () => info('Mongoose disconnected'));

export {
  Types,
  Schema,
  Mongoose,
};

export const connect = (): Promise<typeof Mongoose> => Mongoose.connect(config('mongo.uri'), {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/**
 * Clear database helper.
 */
export const refreshDatabase = async (): Promise<void> => {
  await Mongoose.connection.db.dropDatabase();
};
