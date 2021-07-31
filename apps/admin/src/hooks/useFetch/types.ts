interface ApiError {
  response: {
    data: {
      status: number,
      message: string,
    };
  };
}

interface Response<T> {
  data: T | null,
  error: ApiError,
  mutate: (data?: T, shouldRevalidate?: boolean) => Promise<T | undefined>,
  loading: boolean,
}

export default Response;
