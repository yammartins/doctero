import { Button } from '@uxoctopus/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '~/assets/logo.svg';

import View from './styles';

const routes = [
  {
    label: 'Soluções',
    route: '/solutions',
  },
  {
    label: 'Sobre nós',
    route: '/about',
  },
  {
    label: 'Contato',
    route: '/contact',
  },
];

const Head: React.FC = () => {
  const {
    push,
  } = useRouter();

  return (
    <View className="head">
      <div className="container head-wrapper">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <div className="head-menu">
          {routes.map(({ route, label }) => (
            <Link
              key={route}
              href={route}
            >
              <a>{label}</a>
            </Link>
          ))}
        </div>

        <div className="head-actions">
          <Button
            label="Registrar"
            onClick={() => push('/auth/signup')}
            appearance="secondary"
          />

          <Button
            label="Entrar"
            onClick={() => push('/auth')}
          />
        </div>
      </div>
    </View>
  );
};

export default Head;
