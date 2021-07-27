import React, { useState, useCallback } from 'react';

import { api } from '@core/services';
import { AuthHandles, UserHandles } from '@types';

import AuthContext from './context';

/**
 * Auth module provider.
 */
const AuthProvider: React.FC = ({ children }) => {
  const [user, onUser] = useState<UserHandles | null>(null);
  const [loading, onLoading] = useState(true);

  /**
   * Auth.
   */
  const auth = useCallback(async (data: AuthHandles) => {
    await api.post('/login', data)
      .then(({ data: res }) => {
        console.log(res);

        window.location.replace(process.env.ADMIN_URL || '');
      });
  }, []);

  /**
   * Value provider.
   */
  const value = {
    user,
    auth,
    onUser,
    loading,
    onLoading,
    authenticated: !! user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
