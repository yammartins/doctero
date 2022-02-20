import { useRef, useState, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import { useRouter } from 'next/router';

import { Lottie } from '~/components';
import { Auth as Layout } from '~/layouts';
import { email } from '~/schemas';
import { api } from '~/services';

const Recovery: React.FC = () => {
  const {
    push,
  } = useRouter();

  const [send, onSend] = useState(false);
  const [loading, onLoading] = useState(false);

  const ref = useRef<FormHandles>(null);

  /**
   * Submit for reset password.
   */
  const submit = useCallback(async (data) => {
    onLoading(true);

    await api.post('/user/password', data)
      .then(() => {
        onSend(true);
        onLoading(false);
      });
  }, []);

  return (
    <Layout
      title="Recuperar senha"
      description={! send
        ? 'Não lembra a senha? \nÉ fácil, basta digitar seu e-mail.'
        : ''}
    >
      <div className="auth-lottie">
        <Lottie
          loop={! send}
          width={! send ? '164px' : '200px'}
          height={! send ? '164px' : '200px'}
          animation={! send ? 'email' : 'email-send'}
        />
      </div>

      {send && (
        <div className="flex mt-48 flex-col auth-send">
          <Text
            type="p"
            label={'Enviamos um e-mail com um \ncódigo para você alterar a senha.'}
            className="text-center"
          />

          <Button
            label="Cadastrar nova senha"
            onClick={() => push('/auth/recovery/password')}
            className="mt-24"
          />
        </div>
      )}

      {! send && (
        <Form
          ref={ref}
          onSubmit={(data) => request(submit, ref, data, { email })}
          className="mt-48"
        >
          <FormInput
            name="email"
            label="E-mail"
          />

          <Button
            label={loading ? 'Carregando...' : 'Recuperar'}
            submit
          />
        </Form>
      )}
    </Layout>
  );
};

export default Recovery;
