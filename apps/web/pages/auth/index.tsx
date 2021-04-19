import { useRef } from 'react';

import { auth } from '@core/i18n';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { useRouter } from 'next/router';

import { Auth as Layout } from '../../layouts';

const Auth: React.FC = () => {
  const {
    push,
  } = useRouter();

  const ref = useRef<FormHandles>(null);

  const {
    title,
    fields,
    button,
    recovery,
    description,
  } = auth;

  return (
    <Layout
      title={title}
      description={description}
    >
      <Form
        ref={ref}
        onSubmit={() => null}
        className="flex flex-col"
      >
        <FormInput
          name="email"
          label={fields.email.label}
        />

        <FormInput
          name="password"
          label={fields.email.password}
          isPassword
        />

        <Text
          type="span"
          label={recovery}
          onClick={() => push('/auth/recovery')}
          className="ml-auto mt-16 cursor-pointer"
        />

        <Button label={button} />
      </Form>
    </Layout>
  );
};

export default Auth;
