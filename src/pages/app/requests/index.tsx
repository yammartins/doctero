import { useMemo, useState } from 'react';

import { Text } from '@uxoctopus/core';

import { Avatar, Man } from '~/assets';
import { Table, Empty } from '~/components';
import { useFetch } from '~/hooks';
import {
  AppLayout,
} from '~/layouts';
import { RequestsHandles } from '~/types';

import View from './styles';

const Requests: React.FC = () => {
  const { data, loading } = useFetch<RequestsHandles>('/request');

  const pending = useMemo(() => {
    const filtered = data?.content?.filter(({ user }) => user.userStatus === 'PENDING') || [];

    return filtered;
  }, [data]);

  if (loading) return <h1>Loading ...</h1>;

  return (
    <AppLayout>
      <View>

        <Table
          header={[
            {
              col: 4,
              text:
  <Text
    size="sm"
    weight="500"
  >
    <Avatar />
    Nome completo
  </Text>,
            },
            { col: 3, text: 'E-mail cadastrado' },
            { col: 2, text: 'Posição' },
            { col: 2, text: 'CPF' },
            { col: 1, text: '' },
          ]}
          rows={[
            {
              id: 1,
              lines: [
                {
                  text:
  <Text
    size="sm"
  >
    <div className="body-request">
      <Man />
    </div>
    Friedrich Schiller
  </Text>,
                },
                { text: 'frschiller@outlook.com' },
                { text: 'Donatário' },
                { text: '000.000.000-00' },
              ],
            },
          ]}
          type="auto"
          className="request-table"
        />

        {pending?.length <= 0 && <Empty label="Você não possui nenhum solicitação nesse momento." />}
      </View>
    </AppLayout>
  );
};

export default Requests;
