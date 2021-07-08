import { useRef, useState, useCallback } from 'react';

import { Lottie } from '@core/components';
import { fields, recovery } from '@core/i18n';
import { email as schema } from '@core/schemas';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import { useRouter } from 'next/router';

import { Auth as Layout } from '../../../layouts';

const Recovery: React.FC = () => {
  const {
    push,
  } = useRouter();

  const [send, onSend] = useState(false);

  const ref = useRef<FormHandles>(null);

  const {
    email,
  } = fields;

  const {
    sent,
    title,
    button,
    description,
  } = recovery;

  const submit = useCallback(async () => onSend(true), []);

  const schemas = {
    email: schema,
  };

  return (
    <Layout
      title={title}
      description={! send ? description : ''}
    >
      <div className="auth-lottie">
        <Lottie
          loop={! send}
          width={! send ? '164px' : '200px'}
          height={! send ? '164px' : '200px'}
          animation={! send ? 'email' : 'email-send'}
        />
      </div>

      {send && (
        <div className="flex mt-48 flex-col auth-send">
          <Text
            type="p"
            label={sent}
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
          className="mt-48"
        >
          <FormInput
            name="email"
            label={email.label}
          />

          <Button
            label={button.one}
            submit
          />
        </Form>
      )}
    </Layout>
  );
};

export default Recovery;
