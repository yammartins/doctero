import { useMemo, useState } from 'react';

import { Text } from '@uxoctopus/core';

import { Card, Empty } from '~/components';
import { useFetch } from '~/hooks';
import {
  AppHead, AppDisplay, DisplayHandles, AppLayout,
} from '~/layouts';
import { UsersHandles } from '~/types';

import View from './styles';

const Users: React.FC = () => {
  const [display, onDisplay] = useState<DisplayHandles>('list');

  const { data, loading } = useFetch<UsersHandles>('/user');

  const users = useMemo(() => {
    const filtered = data?.content?.filter(({ userStatus }) => userStatus === 'ACTIVE') || [];

    // const remove = filtered.filter(({ id }) => id !== user?.id) || [];

    return [];
  }, [data]);

  if (loading) return <h1>Loading ...</h1>;

  return (
    <AppLayout>
      <View>
        <AppHead
          title="Usuários"
          display={display}
          onDisplay={onDisplay}
        />

        {users?.length > 0 && (
          <AppDisplay
            display={display}
            className="users"
          >
            {users.map(({ id, name, email }) => (
              <Card key={id}>
                <div className="flex flex-col">
                  <Text
                    type="h6"
                    label={name}
                    weight="600"
                  />

                  <Text
                    type="p"
                    label={email}
                    className="mt-4"
                  />
                </div>
              </Card>
            ))}
          </AppDisplay>
        )}

        {users?.length <= 0 && <Empty label="Você não possui nenhum usuário registrado." />}
      </View>
    </AppLayout>
  );
};

export default Users;
