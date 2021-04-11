import { Document } from 'mongoose';

import { User } from '../@types';

export type Policy = (
  model: Document,
  actions: Record<any, any>,
) => void;

export type Ability = (
  action: string,
  callback: (key: any) => any,
  model?: Document,
) => void;

export type Authorize = (
  user: User,
  method?: 'GET' | 'PUT' | 'POST' | 'DELETE',
  model?: Document,
) => void;

export type Gates = {
  policy: Policy;
  ability: Ability;
  authorize: Authorize;
}
