import { useRef, useState, useCallback } from 'react';

import { fields, signup } from '@core/i18n';
import * as schema from '@core/schemas';
import { Type } from '@types';
import { Scope, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button, FormInput, FormRadio } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';

import { Auth as Layout } from '../../layouts';

const Signup: React.FC = () => {
  const [type, onType] = useState<Type>();
  const [step, onStep] = useState(1);

  const ref = useRef<FormHandles>(null);

  const {
    title,
    button,
    success,
    description,
  } = signup;

  const {
    type: typed,
    city,
    name,
    email,
    state,
    phone,
    street,
    number,
    document,
    password,
    neighborhood,
  } = fields;

  const schemas = {
    one: {
      type: schema.type,
      name: schema.name,
      email: schema.email,
      password: schema.password,
    },

    two: {
      phone: schema.phone,
      address: schema.address,
      document: type === 'GRANTEE' ? schema.document : undefined,
    },
  };

  const submit = useCallback(async (data) => {
    if (step === 1) onType(data.type);

    onStep((current) => current + 1);
  }, [step]);

  return (
    <Layout
      type="signup"
      title={step !== 3 ? title : success.title}
      description={step !== 3 ? description : success[type].description}
    >
      {step !== 3 && (
        <Form
          ref={ref}
          onSubmit={(data) => request(submit, ref, data, step === 1 ? schemas.one : schemas.two)}
        >
          <div className={`${step === 1 ? 'flex' : 'hidden'} flex-col`}>
            <FormInput
              name="name"
              label={name.label}
            />

            <FormInput
              name="email"
              label={email.label}
            />

            <FormInput
              name="password"
              label={password.label}
              isPassword
            />

            <FormRadio
              name="type"
              options={typed.options}
              className="mt-24"
              orientation="horizontal"
            />
          </div>

          <div className={`${step === 2 ? 'flex' : 'hidden'} flex-col`}>
            {type === 'GRANTEE' && (
              <FormInput
                name="document"
                mask="999.999.999-99"
                label={document.label}
              />
            )}

            <FormInput
              name="phone"
              mask="(99) 99999-9999"
              label={phone.label}
            />

            <Scope path="address[0]">
              <div className="flex is-row mt-24 space-x-24 items-center">
                <FormInput
                  name="state"
                  label={state.label}
                />

                <FormInput
                  name="city"
                  label={city.label}
                />
              </div>

              <FormInput
                name="street"
                label={street.label}
              />

              <div className="flex is-row mt-24 space-x-24 items-center">
                <FormInput
                  name="number"
                  label={number.label}
                />

                <FormInput
                  name="neighborhood"
                  label={neighborhood.label}
                />
              </div>
            </Scope>
          </div>

          <Button
            label={step === 1 ? button.one : button.two}
            submit
          />
        </Form>
      )}

      {step === 3 && (
        <div className="flex flex-col">
          <h1>Sucesso</h1>
        </div>
      )}
    </Layout>
  );
};

export default Signup;
