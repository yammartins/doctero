import { useRef, useState, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import { useRouter } from 'next/router';

import { Lottie } from '~/components';
import { Auth as Layout } from '~/layouts';
import { email, password, confirm_password } from '~/schemas';
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
        <div className="auth-recovery">
          <Lottie
            width="280px"
            height="200px"
            animation="success"
          />

          <Text
            label="Senha alterada com sucesso."
            align="center"
          />

          <Button
            label="Ir para a tela de login"
            onClick={() => push('/auth')}
            className="auth-recovery-submit"
          />
        </div>
      )}

      {! send && (
        <Form
          ref={ref}
          onSubmit={(data) => request(submit, ref, data, schema)}
          className="auth-recovery"
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
