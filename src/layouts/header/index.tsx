import { Text, Button, Container } from '@uxoctopus/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

import View from './styles';

const Header: React.FC = () => {
  const {
    push,
  } = useRouter();

  return (
    <View className="header h-screen">
      <Container className="h-full">
        <div className="header-wrapper">
          <Text
            type="h1"
            label="Build fast, secured and beutuful web-sites."
            weight="800"
          />

          <Text
            type="p"
            label="Create, build, collaborate and ship products faster. Good bye code! 👋"
            className="mt-20"
          />

          <Button
            label="Cadastre-se agora"
            onClick={() => push('/auth/signup')}
            className="mt-64"
          />
        </div>

        <div className="header-image">
          <Image
            src="/assets/images/header.png"
            width={580}
            height={392}
            layout="responsive"
            loading="lazy"
          />
        </div>
      </Container>
    </View>
  );
};

export default Header;
