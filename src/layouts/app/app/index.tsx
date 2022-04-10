import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Logo, Man, Dashboard, Requests, History, Users, Corporate,
} from '~/assets';

import View from './styles';

const App: React.FC = ({ children }) => {
  const router = useRouter();

  const menu = [
    {
      icon: <Dashboard />,
      name: 'Dashboard',
      path: 'dashboard',
    },
    {
      icon: <Requests />,
      name: 'Solicitações',
      path: 'requests',
    },
    {
      icon: <History />,
      name: 'Histórico',
      path: 'history',
    },
    {
      icon: <Users />,
      name: 'Usuários',
      path: 'users',
    },
    {
      icon: <Corporate />,
      name: 'Empresas',
      path: 'corporate',
    },
  ];

  return (
    <View
      className="app"
    >
      <div className="app-menu">
        <div className="app-menu-header">
          <Logo />
          <Link href="/">
            <a className="profile">
              <Man />
            </a>
          </Link>
        </div>
        <div className="app-menu-items">
          {menu.map(({ icon, name, path }, index) => (
            <Link
              key={path}
              href={`/app/${path}`}
            >
              <a
                style={{ borderLeft: index > 0 ? '1px solid #F1F5F9' : '' }}
                className={router.pathname === `/app/${path}` ? 'active' : ''}
              >
                {icon}
                {name}
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="app-wrapper">
        {children}
      </div>
    </View>
  );
};

export default App;
