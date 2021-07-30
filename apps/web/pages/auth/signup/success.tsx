import { useState, useEffect } from 'react';

import { Text, Button } from '@uxoctopus/core';
import { useRouter } from 'next/router';

import { Lottie } from '../../../components';
import { Auth as Layout } from '../../../layouts';
import { api } from '../../../services';

const Success: React.FC = () => {
  const [error, onError] = useState(false);

  const {
    push,
    query,
  } = useRouter();

  useEffect(() => {
    if (query.code) {
      const fetch = async () => {
        await api.get(`/user/confirm?confirmationCode=${query.code}`)
          .catch(() => onError(true));
      };

      fetch();
    }
  }, [query]);

  return (
    <Layout
      type="signup"
      title={error ? 'E-mail já foi confirmado' : 'Parabéns'}
      description={! error ? 'E-mail confirmado com sucesso.' : ''}
    >
      {! error && (
        <Lottie
          width="280px"
          height="200px"
          animation="success"
        />
      )}

      <Text
        label={error ? 'Esse e-mail já foi confirmado, tente acessar a nossa plataforma.' : 'É isso ai, agora basta acessar a sua conta e começar a usar todos os recursos.'}
        align="center"
      />

      <Button
        label="Acessar a tela de login"
        onClick={() => push('/auth')}
      />
    </Layout>
  );
};

export default Success;
