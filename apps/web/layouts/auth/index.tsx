import { auth, signup } from '@core/i18n';
import { Icon, Text } from '@uxoctopus/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

import View from './styles';
import { Handles } from './types';

const Auth: React.FC<Handles> = ({
  type = 'auth',
  title,
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
      labels: auth.signup,
    },

    signup: {
      route: '/auth',
      labels: signup.auth,
    },
  };

  return (
    <View className="flex auth h-screen">
      <div className="flex pb-24 px-64 w-full flex-col auth-wrapper">
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

        {description && (
          <Text
            type="p"
            label={description}
          />
        )}

        <div className="mt-48 auth-form">
          {children}
        </div>

        <div className="flex mt-auto flex-col items-center auth-footer">
          <Text
            type="p"
            label={footer[type].labels[0]}
          />

          <Text
            type="p"
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
