import React, { useState, useCallback } from 'react';

import { api } from '@core/services';
import { AuthHandles, UserHandles } from '@types';
import cookie from 'js-cookie';
import jwt, { JwtPayload } from 'jwt-decode';

import AuthContext from './context';

/**
 * Auth module provider.
 */
const AuthProvider: React.FC = ({ children }) => {
  const [user, onUser] = useState<UserHandles | null>(null);
  const [loading, onLoading] = useState(true);

  /**
   * Cookies.
   */
  const web = import.meta.env.WEB_URL as string;
  const auth = import.meta.env.COOKIE_AUTH as string;
  const data = import.meta.env.COOKIE_USER as string;

  const fetch = async () => {
    const token = cookie.get(auth);

    if (! token) return null;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    const decode = jwt<JwtPayload>(token);

    console.log(decode);

    return null;
  };

  /**
   * Logout user.
   */
  const logout = () => {
    cookie.remove(auth);
    localStorage.removeItem(data);

    window.location.replace(web);
  };

  /**
   * Value provider.
   */
  const value = {
    user,
    fetch,
    logout,
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
