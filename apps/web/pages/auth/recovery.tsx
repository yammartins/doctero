import { useRef, useState } from 'react';

import { Lottie } from '@core/components';
import { fields, recovery } from '@core/i18n';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button, FormInput } from '@uxoctopus/core';

import { Auth as Layout } from '../../layouts';

const Auth: React.FC = () => {
  const [send, onSend] = useState(false);

  const ref = useRef<FormHandles>(null);

  const {
    email,
  } = fields;

  const {
    title,
    button,
    description,
  } = recovery;

  const submit = () => {
    onSend(true);
  };

  return (
    <Layout
      title={title}
      description={description}
    >
      <div className="auth-lottie">
        <Lottie
          loop
          width="164px"
          height="164px"
          animation="email"
        />
      </div>

      <Form
        ref={ref}
        onSubmit={() => null}
        className="mt-48"
      >
        <FormInput
          name="email"
          label={email.label}
        />

        <Button label={button.one} />
      </Form>
    </Layout>
  );
};

export default Auth;
