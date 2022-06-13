import { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import Link from 'next/link';
import { AuthLayout } from '~/layouts';
import {
  Text, Button, FormInput, Checkbox, Radio,
} from '~/components';
import { SignInHandles } from '~/types';

const SignUp: React.FC = () => {
  const [step, onStep] = useState(1);
  const [cliType, onCliType] = useState('donatory');

  const signUpRef = useRef<FormHandles>(null);

  const clientType = [
    { id: 'donatory', value: 'donatory', label: 'Donatário' },
    { id: 'giver', value: 'giver', label: 'Doador' },
  ];

  const handleSubmit: SubmitHandler<SignInHandles> = (data) => {
    console.log(signUpRef);
  };

  console.log(cliType);

  return (
    <AuthLayout
      title="Cadastrar"
      description="Primeiro, precisamos de algumas informações básicas a respeito de você:"
      back
    >
      <Form
        ref={signUpRef}
        onSubmit={handleSubmit}
        className="signUp-box"
      >
        <div className="signUp-box-header">
          <div className="signUp-step-box">
            <div className="step-1">
              1
            </div>
            <div className="step-2">
              2
            </div>
            <div className="step-3">
              3
            </div>
          </div>
        </div>

        { step === 1 && (
          <div className="firstStep-input">
            <FormInput
              fieldName="name"
              name="name"
              label="Nome"
              icon="user-circle"
            />

            <FormInput
              fieldName="email"
              icon="envelope-simple-bold"
              label="E-mail"
              name="email"
            />

            <FormInput
              fieldName="password"
              icon="lock-bold"
              label="Senha"
              name="password"
            />

            <Checkbox
              name="privacy"
              label="Li e aceito os termos de serviço e a política de privacidade."
            />
          </div>
        )}

        { step === 2 && (
          <div className="secondStep-input">
            <div className="secondStep-input-type">
              <Radio
                name="clientType"
                options={clientType}
                defaultValue="donatory"
                defaultChecked
                onChange={(target) => onCliType(target.target.value)}
              />
            </div>

            {cliType === 'donatory' && (
              <div className="secondStep-input-donatory">
                <FormInput
                  name="document"
                  label="CPF"
                />

                <FormInput
                  name="phone"
                  label="Telefone"
                />

                <FormInput
                  name="address"
                  label="Endereço"
                />

                <div className="donatoryAddress-box">
                  <FormInput
                    name="district"
                    label="Bairro"
                  />

                  <FormInput
                    name="number"
                    label="Número"
                  />
                </div>
              </div>
            )}

            {cliType === 'giver' && (
              <div className="secondStep-input-giver">
                <FormInput
                  name="phone"
                  label="Telefone"
                />

                <FormInput
                  name="address"
                  label="Endereço"
                />

                <div className="giverAddress-box">
                  <FormInput
                    name="district"
                    label="Bairro"
                  />

                  <FormInput
                    name="number"
                    label="Número"
                  />
                </div>
              </div>
            )}

          </div>
        )}

        <div className="signUp-box-footer">

          <div className="signUp-button-box">
            {step === 1 && (
              <Button
                label="Continuar"
                submit
                onClick={() => onStep(step + 1)}
                size="lg"
                className="firstStep-button"
              />
            )}

            {step === 2 && (
              <>
                <Button
                  label="Voltar"
                  onClick={() => onStep(step - 1)}
                  appearance="outline"
                  className="secondStep-button"
                />

                <Button
                  label="Continuar"
                  submit
                  onClick={() => onStep(step + 1)}
                  size="base"
                  className="secondStep-button"
                />
              </>
            )}
          </div>

          <Text
            weight="medium"
            size="sm"
            className="text-gray-500"
            align="center"
          >
            Já é cadastrado?
            <Link
              href="/auth/signin"
            >
              <a>
                Entrar
              </a>
            </Link>
          </Text>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default SignUp;
