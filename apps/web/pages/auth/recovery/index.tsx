import { useRef, useState, useCallback } from 'react';

import { fields, recovery } from '@core/i18n';
import { email as schema } from '@core/schemas';
import { api } from '@core/services';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Text, Button, FormInput } from '@uxoctopus/core';
import { request } from '@uxoctopus/helpers';
import { useRouter } from 'next/router';

import { Lottie } from '../../../components';
import { Auth as Layout } from '../../../layouts';

const Recovery: React.FC = () => {
  const {
    push,
  } = useRouter();

  const [send, onSend] = useState(false);
  const [loading, onLoading] = useState(false);

  const ref = useRef<FormHandles>(null);

  const {
    email,
    feedback,
  } = fields;

  const {
    sent,
    title,
    button,
    description,
  } = recovery;

  /**
   * Submit for reset password.
   */
  const submit = useCallback(async (data) => {
    onLoading(true);

    await api.post('/user/password', data)
      .then(() => {
        onSend(true);
        onLoading(false);
      });
  }, []);

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
            onClick={() => push('/auth/recovery/password')}
            className="mt-24"
          />
        </div>
      )}

      {! send && (
        <Form
          ref={ref}
          onSubmit={(data) => request(submit, ref, data, { email: schema })}
          className="mt-48"
        >
          <FormInput
            name="email"
            label={email.label}
          />

          <Button
            label={loading ? feedback.loading : button.one}
            submit
          />
        </Form>
      )}
    </Layout>
  );
};

export default Recovery;
