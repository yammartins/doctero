import React, { useMemo, useState } from 'react';

import { UsersHandles } from '@types';
import { Text } from '@uxoctopus/core';

import { Card, Empty } from '~/components';
import { useAuth, useFetch } from '~/hooks';
import { Head, Display, DisplayHandles } from '~/layouts';

import View from './styles';

const Users: React.FC = () => {
  const [display, onDisplay] = useState<DisplayHandles>('list');

  const { data } = useFetch<UsersHandles>('/user');

  const {
    user,
  } = useAuth();

  const users = useMemo(() => {
    const filtered = data?.content?.filter(({ userStatus }) => userStatus === 'ACTIVE') || [];

    const remove = filtered.filter(({ id }) => id !== user?.id) || [];

    return remove;
  }, [user, data]);

  if (! data) return <h1>Loading ...</h1>;

  return (
    <View>
      <Head
        title="Usuários"
        display={display}
        onDisplay={onDisplay}
      />

      {users?.length > 0 && (
        <Display
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
        </Display>
      )}

      {users?.length <= 0 && <Empty label="Você não possui nenhum usuário registrado." />}
    </View>
  );
};

export default Users;
