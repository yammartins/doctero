import { UserHandles } from '@types';

export interface ProviderHandles {
  user: UserHandles | null,
  onUser: (data: UserHandles) => void,
  loading: boolean,
  onLoading: (data: boolean) => void,
  authenticated: boolean,
}
