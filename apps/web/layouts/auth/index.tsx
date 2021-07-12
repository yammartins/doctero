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
    409: 'Desculpe, esse e-mail já está cadastrado.',
  };

  return (
    <View
      scroll={scroll}
      className="flex auth h-screen"
    >
      <div className="flex pb-24 px-64 w-full flex-col auth-wrapper is-scroll">
        {title && (
          <div className="flex mb-16 auth-title items-center">
            <Icon
              name="arrow-narrow-left"
              onClick={back}
              className="cursor-pointer"
            />

            <Text
              type="h1"
              label={title}
              weight="800"
              className="ml-24"
            />
          </div>
        )}

        {description && <Text label={description} />}

        <div className="mt-48 auth-form">
          {children}

          {error && (
            <Text
              type="span"
              label={status[error]}
              className="flex mt-16 justify-center auth-error"
            />
          )}
        </div>

        <div className="flex mt-auto flex-col items-center auth-footer">
          <Text label={footer[type].labels[0]} />

          <Text
            label={footer[type].labels[1]}
            weight="800"
            onClick={() => push(footer[type].route)}
            className="mt-4 is-action cursor-pointer"
          />
        </div>
      </div>

      <div className="flex w-full h-full relative auth-image">
        <Image
          src="/assets/auth.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </View>
  );
};

export default Auth;
