import { useRef } from 'react';

import { Lottie } from '@core/components';
import { recovery } from '@core/i18n';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Button, FormInput } from '@uxoctopus/core';

import { Auth as Layout } from '../../layouts';

const Auth: React.FC = () => {
  const ref = useRef<FormHandles>(null);

  const {
    title,
    fields,
    button,
    description,
  } = recovery;

  return (
    <Layout
      title={title}
      description={description}
    >
      <div className="auth-lottie">
        <Lottie
          loop
          height="64px"
          animation="email"
        />
      </div>

      <Form
        ref={ref}
        onSubmit={() => null}
      >
        <FormInput
          name="email"
          label={fields.email.label}
        />

        <Button label={button.one} />
      </Form>
    </Layout>
  );
};

export default Auth;
