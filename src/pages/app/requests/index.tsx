import { useCallback } from 'react';

import { Text } from '@uxoctopus/core';

import { Avatar, Man } from '~/assets';
import { Table } from '~/components';
import {
  AppLayout,
} from '~/layouts';

import View from './styles';

const Requests: React.FC = () => {
  const type = 'DONATOR' || 'RECEIVER';

  const Position = useCallback(() => {
    if (type === 'DONATOR') {
      return (
        <Text
          label="Doador"
          className="donator"
          size="sm"
          weight="500"
        />
      );
    }
    if (type === 'RECEIVER') {
      return (
        <Text
          label="Donatário"
          className="receiver"
          size="sm"
          weight="500"
        />
      );
    }

    return null;
  }, [type]);

  const user = [
    {
      id: 1,
      address: 'Av. Coronel Belchior de Godói, 2125',
      name: 'Johann Christoph Friedrich von Schiller',
      email: 'frschiller@outlook.com',
      phone: '(00) 00000-0000',
      types: 'DONATOR',
      position: 'Doador',
      CPF: '000000000-00',
    },
    {
      id: 2,
      address: 'Av. Coronel Belchior de Godói, 2125',
      name: 'Johann Christoph Friedrich von Schiller',
      email: 'frschiller@outlook.com',
      phone: '(00) 00000-0000',
      types: 'RECEIVER',
      position: 'Donatário',
      CPF: '000000000-00',
    },
  ];

  return (
    <AppLayout>
      <View>

        <Table
          header={[
            {
              col: 4,
              text: (
                <Text
                  size="sm"
                  weight="500"
                >
                  <Avatar />
                  Nome completo
                </Text>
              ),
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
                  text: (
                    <Text
                      size="sm"
                    >
                      <div className="body-request">
                        <Man />
                      </div>
                      Friedrich Schiller
                    </Text>
                  ),
                },
                { text: 'frschiller@outlook.com' },
                { text: <Position /> },
                { text: '000.000.000-00' },
              ],
              details: user,
            },
            {
              id: 2,
              lines: [
                {
                  text: (
                    <Text
                      size="sm"
                    >
                      <div className="body-request">
                        <Man />
                      </div>
                      Friedrich Schiller
                    </Text>
                  ),
                },
                { text: 'frschiller@outlook.com' },
                { text: <Position /> },
                { text: '000.000.000-00' },
              ],
              details: user,
            },
          ]}
          type="auto"
          className="request-table"
        />

      </View>
    </AppLayout>
  );
};

export default Requests;
