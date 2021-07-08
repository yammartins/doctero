import { useRef, useState, useCallback } from 'react';

import { auth, fields } from '@core/i18n';
import * as schema from '@core/schemas';
import { api } from '@core/services';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import { useRouter } from 'next/router';

import { Auth as Layout } from '../../layouts';

const Auth: React.FC = () => {
  const [status, onStatus] = useState({ error: false, loading: false });

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
    feedback,
    password,
  } = fields;

  const schemas = {
    username: schema.email,
    password: schema.password,
  };

  const submit = useCallback(async (form) => {
    onStatus({ loading: true, error: false });

    await api.post('/login', form)
      .then(() => window.location.replace(process.env.ADMIN_URL || ''))
      .catch(() => onStatus({ loading: false, error: true }));
  }, []);

  return (
    <Layout
      title={title}
      scroll={false}
      description={description}
    >
      <Form
        ref={ref}
        onSubmit={(data) => request(submit, ref, data, schemas)}
        className="flex flex-col"
      >
        <FormInput
          name="username"
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
          label={status.loading ? feedback.loading : button}
          submit
        />
      </Form>

      {status.error && (
        <Text
          type="span"
          label={feedback.error}
          className="flex mt-16 justify-center auth-error"
        />
      )}
    </Layout>
  );
};

export default Auth;
