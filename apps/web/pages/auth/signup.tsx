import { useRef } from 'react';

import { signup } from '@core/i18n';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button, FormInput } from '@uxoctopus/core';

import { Auth as Layout } from '../../layouts';

const Signup: React.FC = () => {
  const ref = useRef<FormHandles>(null);

  const {
    title,
    fields,
    button,
    description,
  } = signup;

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
          label={fields.name.label}
        />

        <FormInput
          name="email"
          label={fields.email.label}
        />

        <FormInput
          name="password"
          label={fields.name.password}
          isPassword
        />

        <Button label={button.one} />
      </Form>
    </Layout>
  );
};

export default Signup;
