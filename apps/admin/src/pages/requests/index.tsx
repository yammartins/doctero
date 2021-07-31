import React, { useMemo, useState } from 'react';

import { RequestsHandles } from '@types';
import { Text } from '@uxoctopus/core';

import { Empty } from '~/components';
import { useFetch } from '~/hooks';
import { Head } from '~/layouts';

import View from './styles';

const Requests: React.FC = () => {
  const [display, onDisplay] = useState<'list' | 'grid'>('list');

  const { data } = useFetch<RequestsHandles>('/request');

  const pending = useMemo(() => {
    const filtered = data?.content?.filter(({ user }) => user.userStatus === 'PENDING') || [];

    return filtered;
  }, [data]);

  if (! data) return <h1>Loading ...</h1>;

  return (
    <View>
      <Head
        title="Solicitações"
        display={display}
        onDisplay={onDisplay}
      />

      {pending?.length > 0 && (
        <div className="requests flex flex-col mt-48">
          {pending.map(({ user }) => (
            <div key={user.id} className="requests-card rounded-8 p-32">
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
            </div>
          ))}
        </div>
      )}

      {pending?.length <= 0 && <Empty label="Você não possui nenhum solicitação nesse momento." />}
    </View>
  );
};

export default Requests;
