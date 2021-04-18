import { useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button, FormInput } from '@uxoctopus/core';

import { Auth as Layout } from '../../layouts';

const Auth: React.FC = () => {
  const ref = useRef<FormHandles>(null);

  return (
    <Layout
      title="Entrar"
      description="Acesse sua conta para ter acesso à todas as suas informações."
    >
      <Form
        ref={ref}
        onSubmit={() => null}
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

        <Button label="Entrar" />
      </Form>
    </Layout>
  );
};

export default Auth;
