import { createContext } from 'react';

import { ProviderHandles } from './types';

/**
 * Auth module context.
 */
const AuthContext = createContext({} as ProviderHandles);

export default AuthContext;
