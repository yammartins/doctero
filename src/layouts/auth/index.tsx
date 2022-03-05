import { Icon, Text } from '@uxoctopus/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

import View from './styles';
import { Handles } from './types';

const Auth: React.FC<Handles> = ({
  type = 'auth',
  error,
  title,
  scroll = true,
  children,
  description,
}) => {
  const {
    push,
    back,
  } = useRouter();

  const footer = {
    auth: {
      route: '/auth/signup',
      labels: [
        'Não possui conta?',
        'Cadastrar',
      ],
    },

    signup: {
      route: '/auth',
      labels: [
        'Já é cadastrado?',
        'Entrar',
      ],
    },
  };

  const status = {
    403: 'Desculpe, dados incorretos, tente novamente.',
    404: 'Link expirado, solicite novamente.',
    409: 'Desculpe, esse e-mail já está cadastrado.',
  };

  return (
    <View
      scroll={scroll}
      className="auth"
    >
      <div className="auth-wrapper is-scroll">
        {title && (
          <div className="auth-title">
            <Icon
              size="2xl"
              name="arrow-narrow-left"
              onClick={back}
            />

            <Text
              type="h1"
              size="5xl"
              label={title}
              weight="800"
            />
          </div>
        )}

        {description && <Text label={description} />}

        <div className="auth-form">
          {children}

          {error && (
            <Text
              size="sm"
              label={status[error]}
              className="auth-error"
            />
          )}
        </div>

        <div className="auth-footer">
          <Text label={footer[type].labels[0]} />

          <Text
            label={footer[type].labels[1]}
            weight="800"
            onClick={() => push(footer[type].route)}
            className="is-action"
          />
        </div>
      </div>

      <div className="auth-image">
        <Image
          src="/assets/images/auth.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </View>
  );
};

export default Auth;
