import { useMemo, useState } from 'react';

import { Text } from '@uxoctopus/core';

import { Card, Empty } from '~/components';
import { useFetch } from '~/hooks';
import {
  AppHead, AppDisplay, DisplayHandles, AppLayout,
} from '~/layouts';
import { RequestsHandles } from '~/types';

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
    <AppLayout>
      <View>
        <AppHead
          title="Solicitações"
          display={display}
          onDisplay={onDisplay}
        />

        {pending?.length > 0 && (
          <AppDisplay
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
          </AppDisplay>
        )}

        {pending?.length <= 0 && <Empty label="Você não possui nenhum solicitação nesse momento." />}
      </View>
    </AppLayout>
  );
};

export default Requests;
