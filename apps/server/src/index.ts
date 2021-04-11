import cors from '@koa/cors';
import Koa, { DefaultState, DefaultContext } from 'koa';
import parser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import { Document } from 'mongoose';

import { User as Users } from './@types';
import { createGatter } from './auth';
import { User, connect } from './database';
import { info } from './helpers';
import { errors } from './middlewares';
import router from './routes';

const setupGates = () => {
  const {
    policy,
    ability,
    authorize,
  } = createGatter();

   /**
   * Add root gate.
   */
  ability('root', (user) => user.root);

   /**
   * Create user gate.
   */
  policy(User, {

    /**
     * Authorize user update model.
     */
    update: (user: Users, model: Document) => user._id.toString() === model._id.toString(),
  });

  return authorize;
};

const App = async (): Promise<Koa<DefaultState, DefaultContext>> => {
  info('Bootstraping application');

  const app = new Koa();

  const Authorize = setupGates();

  /**
   * Register authorize function in context.
   */
   app.context.authorize = function authorize (...args: any[]) {
    return Authorize(this.state.auth, ...args);
  };

  app.use(cors())
  app.use(helmet())
  app.use(errors)
  app.use(parser({ jsonLimit: '2mb' }))
  app.use(router.routes())
  app.use(router.allowedMethods())

  await connect();

  info('Application ready to be runned!');

  app.listen(process.env.PORT || 3333);

  return app;
};

App();
