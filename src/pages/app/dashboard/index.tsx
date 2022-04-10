import { useMemo } from 'react';

import { Text } from '@uxoctopus/core';

import { useFetch } from '~/hooks';
import { AppLayout } from '~/layouts';
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
        Vasco!
      </Dashboard>
    </AppLayout>
  );
};

export default View;
