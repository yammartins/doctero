import { useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { useRouter } from 'next/router';

import { Auth as Layout } from '../../layouts';

const Auth: React.FC = () => {
  const {
    push,
  } = useRouter();

  const ref = useRef<FormHandles>(null);

  return (
    <Layout
      title="Entrar"
      description="Acesse sua conta para ter acesso à todas as suas informações."
    >
      <Form
        ref={ref}
        onSubmit={() => null}
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

        <Text
          type="span"
          label="Esqueceu a senha?"
          onClick={() => push('/auth/recovery')}
          className="ml-auto mt-16 cursor-pointer"
        />

        <Button label="Entrar" />
      </Form>
    </Layout>
  );
};

export default Auth;
