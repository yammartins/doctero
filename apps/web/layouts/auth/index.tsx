import { Icon, Text } from '@uxoctopus/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

import View from './styles';
import { Handles } from './types';

const Auth: React.FC<Handles> = ({
  title,
  children,
  description,
}) => {
  const {
    back,
  } = useRouter();

  return (
    <View className="flex auth h-screen">
      <div className="pb-24 px-64 w-full auth-wrapper">
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
