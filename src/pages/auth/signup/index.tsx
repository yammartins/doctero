import { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import Link from 'next/link';
import { AuthLayout } from '~/layouts';
import {
  Text, Button, FormInput, Checkbox, Radio, Icon,
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

  console.log(step);

  return (
    <AuthLayout
      title="Cadastrar"
      description={`${step === 1 ? 'Primeiro, precisamos de algumas informações básicas a respeito de você' : ''}
       ${step === 2 ? 'Para concluir, selecione o perfil de usuário que melhor se adéque a você' : ''}
      `}
      back
    >
      <Form
        ref={signUpRef}
        onSubmit={handleSubmit}
        initialData={{ clientType: 'donatory' }}
        className="signUp-box"
      >
        <div className="signUp-box-header">
          <div className="signUp-step-box">
            <div className={`step-1 ${step >= 2 ? 'nextAfter-step' : ''}`}>
              1
            </div>
            <div className={`step-2 ${step >= 2 ? 'nextStep' : ''} ${step >= 3 ? 'nextAfter-step' : ''}`}>
              2
            </div>
            <div className={`step-3 ${step === 3 ? 'nextStep' : ''}`}>
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

        { step === 3 && (
          <div className="thirdStep-box">
            <Icon
              name="check-circle"
            />

            <Text
              label="Sua conta foi criada e você já pode acessar o nosso site.
              Por questão de segurança, pediremos mais algumas informações suas nos próximos dias."
              align="center"
            />
          </div>
        )}

        <div className="signUp-box-footer">

          <div className="signUp-button-box">
            {step === 1 && (
              <Button
                label="Continuar"
                submit
                onClick={() => onStep(step + 1)}
                full
                className="firstStep-button"
              />
            )}

            {step === 2 && (
              <>
                <Button
                  label="Voltar"
                  onClick={() => onStep(step - 1)}
                  appearance="outline"
                  full
                  className="secondStep-button"
                />

                <Button
                  label="Continuar"
                  submit
                  onClick={() => onStep(step + 1)}
                  full
                  className="secondStep-button"
                />
              </>
            )}

            {step === 3 && (
              <Button
                label="Quero continuar para o site!"
                submit
                full
                className="thirdStep-button"
              />
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
