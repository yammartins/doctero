import { AuthHandles, UserHandles } from '@types';

export interface ProviderHandles {
  user: UserHandles | null,
  auth: (data: AuthHandles) => Promise<void>,
  onUser: (data: UserHandles) => void,
  loading: boolean,
  onLoading: (data: boolean) => void,
  authenticated: boolean,
}
