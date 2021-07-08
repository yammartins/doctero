import { useRef, useState, useCallback } from 'react';

import { Lottie } from '@core/components';
import { fields, recovery } from '@core/i18n';
import * as schema from '@core/schemas';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import { useRouter } from 'next/router';

import { Auth as Layout } from '../../../layouts';

const Password: React.FC = () => {
  const {
    push,
  } = useRouter();

  const [send, onSend] = useState(false);

  const ref = useRef<FormHandles>(null);

  const {
    button,
    recover,
  } = recovery;

  const {
    password,
    confirm_password,
  } = fields;

  const schemas = {
    password: schema.password,
    confirm_password: schema.confirm_password,
  };

  const submit = useCallback(async () => onSend(true), []);

  return (
    <Layout
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
            label={button.two}
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
