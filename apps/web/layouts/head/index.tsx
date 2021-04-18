import Logo from '@core/assets/svgs/logo.svg';
import { Button } from '@core/components';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    <View className="head py-32 fixed w-full">
      <div className="flex items-center container head-wrapper">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <div className="flex ml-48 items-center space-x-32 head-menu">
          {routes.map(({ route, label }) => (
            <Link
              key={route}
              href={route}
            >
              <a>{label}</a>
            </Link>
          ))}
        </div>

        <div className="flex ml-auto space-x-16 items-center head-actions">
          <Button
            label="Registrar"
            onClick={() => push('/auth/signup')}
            appearance="secondary"
          />
          <Button
            label="Entrar"
            onClick={() => push('/auth/')}
          />
        </div>
      </div>
    </View>
  );
};

export default Head;
