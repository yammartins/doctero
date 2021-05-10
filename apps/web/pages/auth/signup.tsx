import { useRef, useState, useCallback } from 'react';

import { Lottie } from '@core/components';
import { fields, signup } from '@core/i18n';
import * as schema from '@core/schemas';
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

import { Auth as Layout } from '../../layouts';

const Signup: React.FC = () => {
  const {
    push,
  } = useRouter();

  const [step, onStep] = useState(1);
  const [donatory, onDonatory] = useState(false);

  const ref = useRef<FormHandles>(null);

  const {
    title,
    button,
    success,
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
    grantee,
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
      document: donatory ? schema.document : undefined,
    },
  };

  const submit = useCallback(async () => {
    onStep((current) => current + 1);
  }, []);

  return (
    <Layout
      type="signup"
      title={step !== 3 ? title : success.title}
      description={step !== 3 ? description : success.description}
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

            <div className="flex mt-24 items-center">
              <Checkbox
                label={grantee.label}
                checked={donatory}
                onChecked={onDonatory}
              />

              <Tooltip
                size="md"
                label={grantee.tooltip}
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
          <Lottie
            width="280px"
            height="200px"
            animation="success"
          />

          <Text
            type="p"
            label={success.message}
            className="text-center"
          />

          <Button
            label={success.button}
            onClick={() => push('/auth')}
          />
        </div>
      )}
    </Layout>
  );
};

export default Signup;
