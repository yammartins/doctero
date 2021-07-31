import useSWR from 'swr';

import useAuth from '../useAuth';
import handler from './handler';
import Response from './types';

const useFetch = <T>(url: string): Response<T> => {
  const {
    logout,
  } = useAuth();

  const { data, mutate, error } = useSWR<T>(url, handler, {
    revalidateOnFocus: true,
    errorRetryInterval: 10000,
  });

  const loading = ! data && ! error;

  if (error?.response.status === 401) {
    logout();
  }

  return {
    data: data || null,
    error,
    mutate,
    loading,
  };
};

export default useFetch;
