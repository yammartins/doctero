import { useRef, useState, useCallback } from 'react';

import * as schema from '@core/schemas';
import { api } from '@core/services';
import { Scope, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {
  Icon,
  Text,
  Button,
  Tooltip,
  Checkbox,
  FormInput,
} from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import { useRouter } from 'next/router';

import { Lottie } from '../../components';
import { Auth as Layout } from '../../layouts';

const Signup: React.FC = () => {
  const {
    push,
  } = useRouter();

  const [step, onStep] = useState(1);
  const [error, onError] = useState<number | null>(null);
  const [loading, onLoading] = useState(false);
  const [donatory, onDonatory] = useState(false);

  const ref = useRef<FormHandles>(null);

  const {
    name,
    email,
    phone,
    address,
    password,
    document,
    observation,
  } = schema;

  const schemas = {
    one: {
      name,
      email,
      password,
    },

    two: {
      phone,
      address,
      request: donatory ? observation : undefined,
      document: donatory ? document : undefined,
    },
  };

  /**
   * Submit for create user.
   */
  const submit = useCallback(async (data) => {
    if (step === 1) {
      onStep((current) => current + 1);

      return;
    }

    if (step === 2) {
      const {
        request: message,
        ...user
      } = data;

      onLoading(true);

      await api.post('/user', {
        user,
        request: message,
      })
        .then(() => onStep((current) => current + 1))
        .catch(({ response }) => onError(response.status));

      onLoading(false);
    }
  }, [step]);

  /**
   * Label of button.
   */
  const label = (): string => {
    if (loading) return 'Carregando...';

    if (step === 1) return 'Avançar';

    if (step !== 1) return 'Cadastrar';

    return '';
  };

  return (
    <Layout
      type="signup"
      error={error}
      title={step !== 3 ? 'Cadastrar' : 'Parabéns'}
      description={step !== 3
        ? 'Crie sua conta gratuitamente e em poucos segundos.'
        : 'Conta criada com sucesso.'}
    >
      {step !== 3 && (
        <Form
          ref={ref}
          onSubmit={(data) => request(submit, ref, data, step === 1 ? schemas.one : schemas.two)}
        >
          <div className={`${step === 1 ? 'flex' : 'hidden'} flex-col`}>
            <FormInput
              name="name"
              label="Nome completo"
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

            <div className="flex mt-24 items-center">
              <Checkbox
                label="Precisa de alguma ajuda?"
                checked={donatory}
                onChecked={onDonatory}
              />

              <Tooltip
                size="md"
                label="Se precisa de ajuda financeira, alimentícia."
                className="ml-16 is-tooltip"
              >
                <Icon
                  name="question-mark-circle"
                  className="cursor-pointer"
                />
              </Tooltip>
            </div>
          </div>

          <div className={`${step === 2 ? 'flex' : 'hidden'} flex-col`}>
            {donatory && (
              <FormInput
                name="document"
                mask="999.999.999-99"
                label="CPF"
              />
            )}

            <FormInput
              name="phone"
              mask="(99) 99999-9999"
              label="Telefone"
            />

            <Scope path="address[0]">
              <div className="flex is-row mt-24 space-x-24 items-center">
                <FormInput
                  name="state"
                  label="Estado"
                />

                <FormInput
                  name="city"
                  label="Cidade"
                />
              </div>

              <FormInput
                name="street"
                label="Endereço"
              />

              <div className="flex is-row mt-24 space-x-24 items-center">
                <FormInput
                  name="number"
                  label="Número"
                />

                <FormInput
                  name="neighborhood"
                  label="Bairro"
                />
              </div>
            </Scope>

            {donatory && (
              <Scope path="request">
                <FormInput
                  name="description"
                  typed="textarea"
                  label="Descreva sua necessidade"
                />
              </Scope>
            )}
          </div>

          <Button
            label={label()}
            submit
          />
        </Form>
      )}

      {step === 3 && (
        <div className="flex flex-col">
          <Lottie
            width="280px"
            height="200px"
            animation="success"
          />

          <Text
            label="É isso ai, enviamos um e-mail de confirmação, para poder ter todos os acessos à nossa plataforma."
            className="text-center"
          />

          <Button
            label="Acessar a tela de login"
            onClick={() => push('/auth')}
          />
        </div>
      )}
    </Layout>
  );
};

export default Signup;
