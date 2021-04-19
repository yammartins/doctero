import { useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button, FormInput } from '@uxoctopus/core';

import { Auth as Layout } from '../../layouts';

const Auth: React.FC = () => {
  const ref = useRef<FormHandles>(null);

  return (
    <Layout
      title="Recuperar senha"
      description={'Não lembra a senha? \nÉ fácil, basta digitar seu e-mail.'}
    >
      <Form
        ref={ref}
        onSubmit={() => null}
      >
        <FormInput
          name="email"
          label="E-mail"
        />

        <Button label="Recuperar" />
      </Form>
    </Layout>
  );
};

export default Auth;
