import useSWR from 'swr';

import handler from './handler';
import Response from './types';

const useFetch = <T>(url: string): Response<T> => {
  const { data, mutate, error } = useSWR<T>(url, handler, {
    revalidateOnFocus: true,
    errorRetryInterval: 10000,
  });

  const loading = ! data && ! error;

  return {
    data: data || null,
    error,
    mutate,
    loading,
  };
};

export default useFetch;
