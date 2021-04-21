import { useRef, useState, useCallback } from 'react';

import { fields, signup } from '@core/i18n';
import * as schema from '@core/schemas';
import { Scope, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button, FormInput, FormRadio } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';

import { Auth as Layout } from '../../layouts';

const Signup: React.FC = () => {
  const [step, onStep] = useState(1);

  const ref = useRef<FormHandles>(null);

  const {
    title,
    button,
    description,
  } = signup;

  const {
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
      name: schema.name,
      email: schema.email,
      password: schema.password,
    },

    two: {
      city: schema.city,
      phone: schema.phone,
      street: schema.street,
      number: schema.number,
      document: schema.document,
      neighborhood: schema.neighborhood,
    },
  };

  const submit = useCallback(async (data) => {
    console.log(data);

    if (step === 1) {
      onStep((current) => current + 1);
    }
  }, [step]);

  return (
    <Layout
      type="signup"
      title={title}
      description={description}
    >
      <Form
        ref={ref}
        onSubmit={(data) => request(submit, ref, data, step === 1 ? schemas.one : schemas.two)}
      >
        {step === 1 && (
          <div className="flex flex-col">
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
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col">
            <FormRadio
              name="type"
              options={[
                { value: '1', label: 'Doador' },
                { value: '2', label: 'Donatário' },
              ]}
              orientation="horizontal"
            />

            <FormInput
              name="document"
              mask="999.999.999-99"
              label={document.label}
            />

            <FormInput
              name="phone"
              mask="(99) 99999-9999"
              label={phone.label}
            />

            <Scope path="address">
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
        )}

        <Button
          label={step === 1 ? button.one : button.two}
          submit
        />
      </Form>
    </Layout>
  );
};

export default Signup;
