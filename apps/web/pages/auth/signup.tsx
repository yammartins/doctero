import { useRef, useState } from 'react';

import { fields, signup } from '@core/i18n';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button, FormInput, FormRadio } from '@uxoctopus/core';

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
    name,
    email,
    password,
  } = fields;

  return (
    <Layout
      type="signup"
      title={title}
      description={description}
    >
      <Form
        ref={ref}
        onSubmit={() => null}
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
              name="cpf"
              mask="999.999.999-99"
              label="CPF"
            />

            <FormInput
              name="phone"
              mask="(99) 99999-9999"
              label="Telefone"
            />

            <FormInput
              name="address"
              label="Endereço"
            />
          </div>
        )}

        <Button
          label={step === 1 ? button.one : button.two}
          submit={step === 2}
          onClick={() => step === 1 && onStep(2)}
        />
      </Form>
    </Layout>
  );
};

export default Signup;
