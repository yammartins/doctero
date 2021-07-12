import { useRef, useState, useCallback } from 'react';

import {
  code,
  email,
  password,
  confirm_password,
} from '@core/schemas';
import { api } from '@core/services';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import { useRouter } from 'next/router';

import { Lottie } from '../../../components';
import { Auth as Layout } from '../../../layouts';

const Password: React.FC = () => {
  const {
    push,
  } = useRouter();

  const [send, onSend] = useState(false);
  const [error, onError] = useState<number | null>(null);
  const [loading, onLoading] = useState(false);

  const ref = useRef<FormHandles>(null);

  const schema = {
    code,
    email,
    password,
    confirm_password,
  };

  /**
   * Submit for reset password.
   */
  const submit = useCallback(async (data) => {
    onLoading(true);

    await api.put('/user/password', {
      code: data.code,
      email: data.email,
      password: data.password,
    })
      .then(() => onSend(true))
      .catch(({ response }) => onError(response.status));

    onLoading(false);
  }, []);

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
            name="code"
            label="Código"
          />

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
