interface ApiError {
  response: {
    data: string,
    status: number,
  };
}

interface Response<T> {
  data: T | null,
  error: ApiError,
  mutate: (data?: T, shouldRevalidate?: boolean) => Promise<T | undefined>,
  loading: boolean,
}

export default Response;
