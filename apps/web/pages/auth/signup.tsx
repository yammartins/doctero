import { useRef, useState } from 'react';

import { fields, signup } from '@core/i18n';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button, FormInput } from '@uxoctopus/core';

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
            <FormInput
              name="cpf"
              mask="999.999.999-99"
              label={name.label}
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
