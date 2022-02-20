import { UserHandles } from '@types';

export interface ProviderHandles {
  user: UserHandles | null,
  fetch: () => Promise<null>,
  logout: () => void,
  onUser: (data: UserHandles) => void,
  loading: boolean,
  onLoading: (data: boolean) => void,
  authenticated: boolean,
}
