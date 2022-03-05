import { useMemo } from 'react';

import { Text } from '@uxoctopus/core';

import { Card } from '~/components';
import { useFetch } from '~/hooks';
import { AppHead, AppLayout } from '~/layouts';
import { Dashboard } from '~/styles';
import { UsersHandles } from '~/types';

const View: React.FC = () => {
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
    <AppLayout>
      <Dashboard>
        <AppHead title="Dashboard" />

        <div className="dashboard-wrapper">
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
      </Dashboard>
    </AppLayout>
  );
};

export default View;
