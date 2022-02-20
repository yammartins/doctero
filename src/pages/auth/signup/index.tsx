import { useRef, useState, useCallback } from 'react';

import { Scope, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {
  Icon,
  Button,
  Tooltip,
  Checkbox,
  FormInput,
} from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import { useRouter } from 'next/router';

import { Auth as Layout } from '~/layouts';
import * as schema from '~/schemas';
import { api } from '~/services';

const Signup: React.FC = () => {
  const {
    replace,
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
    password,
    document,
    addresses,
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
      request: donatory ? observation : undefined,
      document: donatory ? document : undefined,
      addresses,
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

      const location = {
        ...user.addresses[0],
        country: 'Brasil',
      };

      const formatted = {
        ...user,
        addresses: [location],
      };

      await api.post('/user', {
        user: formatted,
        request: message,
      })
        .then(() => {
          sessionStorage.setItem(process.env.COOKIE_EMAIL || '', user.email);

          replace('/auth/signup/created');
        })
        .catch(({ response }) => onError(response.status));

      onLoading(false);
    }
  }, [step, replace]);

  /**
   * Label of button.
   */
  const label = (): string => {
    if (loading) return 'Carregando...';

    if (step === 1) return 'Avançar';

    if (step === 2) return 'Cadastrar';

    return '';
  };

  return (
    <Layout
      type="signup"
      error={error}
      title="Cadastrar"
      description="Crie sua conta gratuitamente e em poucos segundos."
    >
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

          <Scope path="addresses[0]">
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
    </Layout>
  );
};

export default Signup;
