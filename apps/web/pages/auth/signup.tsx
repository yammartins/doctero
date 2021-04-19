import { useRef } from 'react';

import { fields, signup } from '@core/i18n';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button, FormInput } from '@uxoctopus/core';

import { Auth as Layout } from '../../layouts';

const Signup: React.FC = () => {
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

        <Button label={button.one} />
      </Form>
    </Layout>
  );
};

export default Signup;
