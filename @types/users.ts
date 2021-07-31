import { PaginateHandles } from './paginate';

export type AddressHandles = {
  city: string,
  state: string,
  street: string,
  number: string,
  country: string
  neighborhood: string,
};

export interface UserHandles {
  id: string,
  type: 'SUPERVISOR' | 'STANDARD',
  name: string,
  email: string,
  phone: string,
  address: AddressHandles[],
  document?: string,
  userStatus: 'PENDING' | 'ACTIVE',
}

export interface UsersHandles extends PaginateHandles {
  content: UserHandles[],
}
