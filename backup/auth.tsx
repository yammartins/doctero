import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { UserHandles } from '@types';
import cookie from 'js-cookie';
import jwt, { JwtPayload } from 'jwt-decode';

import { api } from '~/services';

import AuthContext from './context';

/**
 * Auth module provider.
 */
const AuthProvider: React.FC = ({ children }) => {
  const [user, onUser] = useState<UserHandles | null>(null);
  const [loading, onLoading] = useState(true);

  const {
    search,
  } = useLocation();

  const params = new URLSearchParams(search);

  const code = params.get('auth');

  /**
   * Cookies.
   */
  const web = import.meta.env.WEB_URL as string;
  const auth = import.meta.env.COOKIE_AUTH as string;
  const data = import.meta.env.COOKIE_USER as string;

  /**
   * If there is no token in the cookie, set.
   */
  useEffect(() => {
    if (code) cookie.set(auth, code, { expires: 1 });
  }, [auth, code]);

  /**
   * Logout user.
   */
  const logout = useCallback(() => {
    onUser(null);

    cookie.remove(auth);
    localStorage.removeItem(data);

    window.location.replace(web);
  }, [web, data, auth]);

  /**
   * Fetch user.
   */
  const fetch = useCallback(async () => {
    onLoading(true);

    const token = cookie.get(auth);

    if (! token) return null;

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    const decode = jwt<JwtPayload & UserHandles>(token);

    /**
     * Checks if the user has data in storage.
     */
    const storage = localStorage.getItem(data);

    const me = storage ? JSON.parse(storage) : null;

    if (me) {
      onUser(me);

      onLoading(false);

      return null;
    }

    /**
     * If not, consult the api.
     */
    await api.get(`/user/${decode.id}`)
      .then((res) => {
        onUser(res.data);

        localStorage.setItem(data, JSON.stringify(res.data));
      })
      .catch(logout);

    onLoading(false);

    return null;
  }, [data, auth, logout]);

  useEffect(() => {
    fetch();
  }, [fetch]);

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

  if (loading) return <h1>Loading...</h1>;

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
