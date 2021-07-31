import { PaginateHandles } from './paginate';
import { UserHandles } from './users';

export interface RequestHandles {
  user: UserHandles,
  description: string,
}

export interface RequestsHandles extends PaginateHandles {
  content: RequestHandles[],
}
