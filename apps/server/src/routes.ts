import Router from '@koa/router';
import { DefaultState, Context } from 'koa';

import { auth, signup } from './api';

const router = new Router<DefaultState, Context>();

router.post('/auth', auth);
router.post('/signup', signup);

export default router;
