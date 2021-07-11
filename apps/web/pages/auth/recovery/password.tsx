import { useRef, useState, useCallback } from 'react';

import { code, password, confirm_password } from '@core/schemas';
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
  const [status, onStatus] = useState({ error: false, loading: false });

  const ref = useRef<FormHandles>(null);

  /**
   * Submit for reset password.
   */
  const submit = useCallback(async (data) => {
    onStatus({ loading: true, error: false });

    await api.put('/user/password', {
      code: data.code,
      password: data.password,
    })
      .then(() => {
        onSend(true);
        onStatus({ loading: false, error: false });
      })
      .catch(() => onStatus({ loading: false, error: true }));
  }, []);

  return (
    <Layout
      error={status.error}
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
          onSubmit={(data) => request(submit, ref, data, { code, password, confirm_password })}
          className="flex flex-col"
        >
          <FormInput
            name="code"
            label="Código"
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
            label="Alterar senha"
            submit
          />
        </Form>
      )}
    </Layout>
  );
};

export default Password;
