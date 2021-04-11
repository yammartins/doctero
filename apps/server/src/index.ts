import cors from '@koa/cors';
import Koa, { DefaultState, DefaultContext } from 'koa';
import parser from 'koa-bodyparser';
import helmet from 'koa-helmet';

import { connect } from './database';
import { info } from './helpers';

const App = async (): Promise<Koa<DefaultState, DefaultContext>> => {
  info('Bootstraping application');

  const app = new Koa();

  app.use(cors())
  app.use(helmet())
  app.use(parser({ jsonLimit: '2mb' }))

  await connect();

  info('Application ready to be runned!');

  app.listen(process.env.PORT || 3333);

  return app;
};

App();

export default App;
