import Router from '@koa/router';
import { DefaultState, Context } from 'koa';

import { auth, signup } from './controllers';

const router = new Router<DefaultState, Context>();

router.post('/auth', auth);
router.post('/signup', signup);

export default router;
