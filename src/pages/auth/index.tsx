import { useRef, useState, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

import { Auth as Layout } from '~/layouts';
import * as schema from '~/schemas';
import { api } from '~/services';
import { AuthHandles } from '~/types';

const Auth: React.FC = () => {
  const [error, onError] = useState<number | null>(null);
  const [loading, onLoading] = useState(false);

  const {
    push,
  } = useRouter();

  const ref = useRef<FormHandles>(null);

  const {
    email,
    password,
  } = schema;

  const submit = useCallback(async (form: AuthHandles) => {
    onLoading(true);

    await api.post('/login', form)
      .then(({ data }) => {
        const {
          access_token,
        } = data;

        const auth = process.env.COOKIE_AUTH || '';

        cookie.set(auth, access_token, { expires: 1 });

        window.location.replace(`${process.env.ADMIN_URL}?auth=${access_token}` || '');
      })
      .catch(({ response }) => onError(response.status));

    onLoading(false);
  }, []);

  return (
    <Layout
      title="Entrar"
      error={error}
      scroll={false}
      description="Acesse sua conta para ter acesso à todas as suas informações."
    >
      <Form
        ref={ref}
        onSubmit={(data) => request(submit, ref, data, { username: email, password })}
        className="flex flex-col"
      >
        <FormInput
          name="username"
          label="E-mail"
        />

        <FormInput
          name="password"
          label="Senha"
          isPassword
        />

        <Text
          type="span"
          label="Esqueceu a senha?"
          onClick={() => push('/auth/recovery')}
          className="ml-auto mt-16 cursor-pointer"
        />

        <Button
          label={loading ? 'Carregando' : 'Entrar'}
          submit
        />
      </Form>
    </Layout>
  );
};

export default Auth;
