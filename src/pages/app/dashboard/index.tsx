import { useMemo } from 'react';

import { Text } from '@uxoctopus/core';

import { Card } from '~/components';
import { useFetch } from '~/hooks';
import { AppHead } from '~/layouts';
import { UsersHandles } from '~/types';

import View from './styles';

const Dashboard: React.FC = () => {
  const { data } = useFetch<UsersHandles>('/user');

  const fields = useMemo(() => {
    const users = data?.content?.filter(({ userStatus }) => userStatus === 'ACTIVE') || [];

    // const filtered = users.filter(({ id }) => id !== user?.id) || [];

    const pending = data?.content?.filter(({ userStatus }) => userStatus === 'PENDING') || [];

    return {
      users: 1, // filtered.length,
      pending: pending.length,
    };
  }, [data]);

  const {
    users,
    pending,
  } = fields;

  return (
    <View>
      <AppHead title="Dashboard" />

      <div className="grid grid-cols-2 dashboard mt-48 space-x-24">
        <Card className="flex flex-col items-center">
          <Text
            type="h3"
            label={users.toString()}
            weight="800"
          />

          <Text
            label={users <= 1 ? 'Usuário' : 'Usuários'}
            className="mt-8"
          />
        </Card>

        <Card className="flex flex-col items-center">
          <Text
            type="h3"
            label={pending.toString()}
            weight="800"
          />

          <Text
            label={pending <= 1 ? 'Solicitação' : 'Solicitações'}
            className="mt-8"
          />
        </Card>
      </div>
    </View>
  );
};

export default Dashboard;
