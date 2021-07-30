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
  name: string,
  email: string,
  phone: string,
  address: AddressHandles[],
  password: string,
  document?: string,
}
