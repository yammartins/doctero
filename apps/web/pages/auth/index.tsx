import { useRef, useCallback } from 'react';

import { auth, fields } from '@core/i18n';
import * as schema from '@core/schemas';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import { useRouter } from 'next/router';

import { Auth as Layout } from '../../layouts';

const Auth: React.FC = () => {
  const {
    push,
  } = useRouter();

  const ref = useRef<FormHandles>(null);

  const {
    title,
    button,
    recovery,
    description,
  } = auth;

  const {
    email,
    password,
  } = fields;

  const schemas = {
    email: schema.email,
    password: schema.password,
  };

  const submit = useCallback(async () => null, []);

  return (
    <Layout
      title={title}
      description={description}
    >
      <Form
        ref={ref}
        onSubmit={(data) => request(submit, ref, data, schemas)}
        className="flex flex-col"
      >
        <FormInput
          name="email"
          label={email.label}
        />

        <FormInput
          name="password"
          label={password.label}
          isPassword
        />

        <Text
          type="span"
          label={recovery}
          onClick={() => push('/auth/recovery')}
          className="ml-auto mt-16 cursor-pointer"
        />

        <Button
          label={button}
          submit
        />
      </Form>
    </Layout>
  );
};

export default Auth;
