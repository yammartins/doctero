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
  document?: string,
  addresses: AddressHandles[],
  userStatus: 'PENDING' | 'ACTIVE',
}

export interface UsersHandles extends PaginateHandles {
  content: UserHandles[],
}
