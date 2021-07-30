import { useContext } from 'react';

import { AuthContext, ProviderHandles } from '~/auth';

/**
 * Module auth hook.
 */
const useAuth = (): ProviderHandles => useContext(AuthContext);

export default useAuth;
