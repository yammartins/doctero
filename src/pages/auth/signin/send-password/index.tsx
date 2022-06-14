import { useRef } from 'react';
import Link from 'next/link';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { RecoverHandles } from '~/types';
import { AuthLayout } from '~/layouts';
import { FormInput, Button, Text } from '~/components';

const SendPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const recoverSubmit: SubmitHandler<RecoverHandles> = (data) => {
    console.log(formRef);
  };

  return (
    <AuthLayout
      title="Esqueceu a senha?"
      description="Não se desespere, vamos te ajudar. Digite seu e-mail abaixo que vamos enviar um link para você criar uma nova senha."
    >
      <Form
        ref={formRef}
        onSubmit={recoverSubmit}
        className="recoverPassword-box"
      >
        <div className="recoverPassword-box-content">
          <FormInput
            fieldName="email"
            icon="envelope-simple-bold"
            label="E-mail"
            name="email"
          />

          <Button
            label="Enviar e-mail"
            full
            submit
          />
        </div>

        <Text
          align="center"
          size="sm"
          className="recoverPassword-box-footer"
        >
          Lembrou a senha?

          <Link href="/auth/signin">
            <a>
              Entrar
            </a>
          </Link>
        </Text>

      </Form>
    </AuthLayout>
  );
};

export default SendPassword;
