import { Schema } from 'mongoose';

import { warn, config } from '../helpers';

export default (schema: Schema): void => {
  schema
    .pre(/./, async function PreHook () {
      this._query_started_at = Date.now();
    })
    .post(/./, async function PostHook () {
      /**
       * Bail if we don't have any of that.
       */
      if (! (this.getFilter && this._collection)) {
        return;
      }

      const time = Date.now() - this._query_started_at;

      if (time > Number(config('database.slow_query_time'))) {
        const query = JSON.stringify(this.getFilter());
        const {
          collectionName,
        } = this._collection;

        warn(`Slow query (${time}ms): ${collectionName} ${query}`);
      }
    });
};
