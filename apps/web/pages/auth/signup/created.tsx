import { useCallback, useState } from 'react';

import { Text, Button } from '@uxoctopus/core';
import { useRouter } from 'next/router';

import { Lottie } from '~/components';
import { Auth as Layout } from '~/layouts';
import { api } from '~/services';

const Signup: React.FC = () => {
  const {
    push,
  } = useRouter();

  const [send, onSend] = useState<string | null>(null);
  const [loading, onLoading] = useState(false);

  /**
   * Submit for resend email.
   */
  const submit = useCallback(async () => {
    onLoading(true);

    const email = sessionStorage.getItem('doctero-email');

    await api.post('/user/resendConfirmation', { email })
      .then(() => onSend('success'))
      .catch(() => onSend('error'));

    onLoading(false);

    // setTimeout(() => onSend(null), 3000);
  }, []);

  return (
    <Layout
      type="signup"
      title="Parabéns"
      description="Conta criada com sucesso."
    >
      <Lottie
        width="280px"
        height="200px"
        animation="success"
      />

      <Text
        label="É isso ai, enviamos um e-mail de confirmação, para poder ter todos os acessos à nossa plataforma."
        align="center"
      />

      <Text
        label={`Clique aqui para reenviarmos novamente. \n${loading ? 'Enviando ...' : ''}`}
        align="center"
        weight="600"
        onClick={submit}
        className="mt-16 cursor-pointer auth-form-resend"
      />

      <Button
        label="Acessar a tela de login"
        onClick={() => push('/auth')}
      />

      {send && (
        <Text
          label={send === 'success' ? 'E-mail enviado com sucesso.' : 'Desculpe, não conseguimos enviar.'}
          align="center"
          className={`auth-form-resend-status mt-16 is-${send}`}
        />
      )}
    </Layout>
  );
};

export default Signup;
