export type Type = 'GIVER' | 'GRANTEE';

export type Address = {
  city: string,
  neighborhood: string,
  street: string,
  number: string,
  state: string,
  country: string
};

export interface User {
  type: Type,
  name: string,
  email: string,
  phone: string,
  address: Address[],
  password: string,
  document?: string,
}
