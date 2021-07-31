import { api } from '~/services';

const handler = async (params: string): Promise<any> => {
  const { data } = await api.get(params);

  if (data) return data;

  const error = new Error('Unauthorized!');

  throw error;
};

export default handler;
