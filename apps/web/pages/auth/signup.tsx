import { useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button, FormInput } from '@uxoctopus/core';

import { Auth as Layout } from '../../layouts';

const Signup: React.FC = () => {
  const ref = useRef<FormHandles>(null);

  return (
    <Layout
      type="signup"
      title="Cadastrar"
      description="Crie sua conta gratuitamente e em poucos segundos."
    >
      <Form
        ref={ref}
        onSubmit={() => null}
      >
        <FormInput
          name="name"
          label="Nome"
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

        <Button label="Avançar" />
      </Form>
    </Layout>
  );
};

export default Signup;
