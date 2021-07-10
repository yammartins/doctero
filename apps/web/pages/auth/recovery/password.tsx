import { useRef, useState, useCallback } from 'react';

import { fields, recovery } from '@core/i18n';
import * as schema from '@core/schemas';
import { api } from '@core/services';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import { useRouter } from 'next/router';

import { Lottie } from '../../../components';
import { Auth as Layout } from '../../../layouts';

const Password: React.FC = () => {
  const {
    push,
  } = useRouter();

  const [send, onSend] = useState(false);
  const [status, onStatus] = useState({ error: false, loading: false });

  const ref = useRef<FormHandles>(null);

  const {
    button,
    recover,
  } = recovery;

  const {
    code,
    password,
    confirm_password,
  } = fields;

  const schemas = {
    code: schema.code,
    password: schema.password,
    confirm_password: schema.confirm_password,
  };

  /**
   * Submit for reset password.
   */
  const submit = useCallback(async (data) => {
    onStatus({ loading: true, error: false });

    await api.put('/user/password', {
      code: data.code,
      password: data.password,
    })
      .then(() => {
        onSend(true);
        onStatus({ loading: false, error: false });
      })
      .catch(() => onStatus({ loading: false, error: true }));
  }, []);

  return (
    <Layout
      error={status.error}
      title={recover.title}
      description={recover.description}
    >
      {send && (
        <div className="flex flex-col recovery-send">
          <Lottie
            width="280px"
            height="200px"
            animation="success"
          />

          <Text
            label={recover.feedback}
            className="text-center"
          />

          <Button
            label={button.three}
            onClick={() => push('/auth')}
            className="mt-24"
          />
        </div>
      )}

      {! send && (
        <Form
          ref={ref}
          onSubmit={(data) => request(submit, ref, data, schemas)}
          className="flex flex-col"
        >
          <FormInput
            name="code"
            label={code.label}
          />

          <FormInput
            name="password"
            label={password.label}
            isPassword
          />

          <FormInput
            name="confirm_password"
            label={confirm_password.label}
            isPassword
          />

          <Button
            label={recover.button}
            submit
          />
        </Form>
      )}
    </Layout>
  );
};

export default Password;
