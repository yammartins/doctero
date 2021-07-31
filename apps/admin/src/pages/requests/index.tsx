import React, { useMemo, useState } from 'react';

import { RequestsHandles } from '@types';
import { Text } from '@uxoctopus/core';

import { Card, Empty } from '~/components';
import { useFetch } from '~/hooks';
import { Head, Display, DisplayHandles } from '~/layouts';

import View from './styles';

const Requests: React.FC = () => {
  const [display, onDisplay] = useState<DisplayHandles>('list');

  const { data, loading } = useFetch<RequestsHandles>('/request');

  const pending = useMemo(() => {
    const filtered = data?.content?.filter(({ user }) => user.userStatus === 'PENDING') || [];

    return filtered;
  }, [data]);

  if (loading) return <h1>Loading ...</h1>;

  return (
    <View>
      <Head
        title="Solicitações"
        display={display}
        onDisplay={onDisplay}
      />

      {pending?.length > 0 && (
        <Display
          display={display}
          className="requests"
        >
          {pending.map(({ user }) => (
            <Card key={user.id}>
              <div className="flex flex-col">
                <Text
                  type="h6"
                  label={user.name}
                  weight="600"
                />

                <Text
                  type="p"
                  label={user.email}
                  className="mt-4"
                />
              </div>
            </Card>
          ))}
        </Display>
      )}

      {pending?.length <= 0 && <Empty label="Você não possui nenhum solicitação nesse momento." />}
    </View>
  );
};

export default Requests;
