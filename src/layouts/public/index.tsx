import Image from 'next/image';
import Link from 'next/link';

import { Logo } from '~/assets';
import { Button } from '~/components';
import { PublicView } from '~/styles';

const Public: React.FC = () => {
  const menu = [
    {
      id: 1,
      path: '/about-us',
      title: 'Quem somos',
    },
    {
      id: 2,
      path: '/services',
      title: 'Nossos serviços',
    },
    {
      id: 3,
      path: '/contact',
      title: 'Contatos',
    },
  ];

  return (
    <PublicView>

      <div className="container">

        <div className="body-content">

          <div className="header-wrapper">
            <div className="header-wrapper-logo">
              <Logo />
              Doctero
            </div>
            <div className="header-wrapper-menu">
              {menu.map(({ id, path, title }) => (
                <Link
                  key={id}
                  href={path}
                >
                  <a
                    className=""
                  >
                    {title}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="body-wrapper">

            <div className="body-wrapper-text">
              <h1>Doctero, a boa ação que muda o mundo!</h1>

              <p>
                Pouco ou muito, o que importa? toda boa ação já vale a pena. Para nós,
                o que interessa mesmo é o gesto. Doctero: a ponte entre os que querem ajudar
                e aqueles que precisam de ajuda!
              </p>

            </div>

            <Button
              label="Cadastre-se agora!"
            />

          </div>

        </div>

        <div className="body-image">

          <div className="body-image-auth">

            <Button label="Registrar-se" />

            <Button label="Acessar" />

          </div>

          <Image
            src="../assets/images/public.jpeg"
            alt="Substituir essa imagem depois"
            layout="fill"
          />

        </div>

      </div>

    </PublicView>
  );
};

export default Public;
