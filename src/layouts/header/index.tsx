import { Text, Button } from '@uxoctopus/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

import View from './styles';

const Header: React.FC = () => {
  const {
    push,
  } = useRouter();

  return (
    <View className="header">
      <div className="container">
        <div className="header-wrapper">
          <Text
            type="h1"
            size="5xl"
            label="Build fast, secured and beutuful web-sites."
            weight="800"
          />

          <Text label="Create, build, collaborate and ship products faster. Good bye code! 👋" />

          <Button
            label="Cadastre-se agora"
            onClick={() => push('/auth/signup')}
          />
        </div>

        <div className="header-image">
          <Image
            src="/assets/images/header.png"
            layout="fill"
            loading="lazy"
            objectFit="contain"
          />
        </div>
      </div>
    </View>
  );
};

export default Header;
