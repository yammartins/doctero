import { useRef, useState, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import { useRouter } from 'next/router';

import { email, password, confirm_password } from '@core/schemas';

import { Lottie } from '~/components';
import { Auth as Layout } from '~/layouts';
import { api } from '~/services';

const Password: React.FC = () => {
  const {
    push,
    query,
  } = useRouter();

  const [send, onSend] = useState(false);
  const [error, onError] = useState<number | null>(null);
  const [loading, onLoading] = useState(false);

  const ref = useRef<FormHandles>(null);

  const schema = {
    email,
    password,
    confirm_password,
  };

  /**
   * Submit for reset password.
   */
  const submit = useCallback(async (data) => {
    onLoading(true);

    if (query.code) {
      await api.put('/user/password', {
        code: query.code,
        email: data.email,
        password: data.password,
      })
        .then(() => onSend(true))
        .catch(({ response }) => onError(response.status));

      return;
    }

    onError(404);

    onLoading(false);
  }, [query]);

  return (
    <Layout
      error={error}
      title="Redefinir senha"
      description="Digite uma nova senha e sua confirmação."
    >
      {send && (
        <div className="flex flex-col recovery-send">
          <Lottie
            width="280px"
            height="200px"
            animation="success"
          />

          <Text
            label="Senha alterada com sucesso."
            className="text-center"
          />

          <Button
            label="Ir para a tela de login"
            onClick={() => push('/auth')}
            className="mt-24"
          />
        </div>
      )}

      {! send && (
        <Form
          ref={ref}
          onSubmit={(data) => request(submit, ref, data, schema)}
          className="flex flex-col"
        >
          <FormInput
            name="email"
            label="E-mail"
          />

          <FormInput
            name="password"
            label="Senha"
            isPassword
          />

          <FormInput
            name="confirm_password"
            label="Confirmação de senha"
            isPassword
          />

          <Button
            label={loading ? 'Carregando...' : 'Alterar senha'}
            submit
          />
        </Form>
      )}
    </Layout>
  );
};

export default Password;
