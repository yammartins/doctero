import Image from 'next/image';
import Link from 'next/link';

import { Example, Logo } from '~/assets';
import { Button } from '~/components';
import { PublicView } from '~/styles';

const Public: React.FC = () => (
  <PublicView>

    <div className="container">

      <div className="body-content">

        <div className="header-wrapper">

          <Logo className="logo" />

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

    </div>

  </PublicView>
);

export default Public;
