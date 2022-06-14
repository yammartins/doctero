import { useRef } from 'react';
import Link from 'next/link';
import { Form } from '@unform/web';
import { SubmitHandler, FormHandles } from '@unform/core';
import { RecoverHandles } from '~/types';
import { AuthLayout } from '~/layouts';
import { FormInput, Button, Text } from '~/components';

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const recoverSubmit: SubmitHandler<RecoverHandles> = (data) => {
    console.log(formRef);
  };

  return (
    <AuthLayout
      title="Nova senha"
      description="Digite sua nova senha. Vamos solicitar ela a partir de agora, para você entrar no nosso sistema."
    >
      <Form
        ref={formRef}
        onSubmit={recoverSubmit}
        className="recoverPassword-box"
      >
        <div className="recoverPassword-box-content">
          <FormInput
            fieldName="password"
            icon="lock-bold"
            label="Senha"
            name="password"
            type="password"
          />

          <FormInput
            fieldName="confirmPassword"
            icon="lock-bold"
            label="Confirme a senha"
            name="confirmPassword"
            type="password"
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

export default ResetPassword;
