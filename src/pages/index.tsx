import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/components'

const Home: NextPage = () => {
  const menu = [
    {
      id: 1,
      name: 'Sobre nós',
      path: '#about-us'
    },
    {
      id: 2,
      name: 'Missão',
      path: '#mission',
    },
    {
      id: 3,
      name: 'Como ajudar',
      path: '#help',
    },
    {
      id: 4,
      name: 'Contato',
      path: '#contact-us'
    }
  ];

  const org = [
    {
      id: 1,
      name: 'Supervisor',
      path: '/supervisor'
    },
    {
      id: 2,
      name: 'Doador',
      path: '/giver',
    },
    {
      id: 3,
      name: 'Donatário',
      path: '/donatory',
    },
    {
      id: 4,
      name: 'Médicos',
      path: '/doctors',
    }
  ];

  return (
    <main className="public">
      <header>
          <div className="public-header-menu">
            <h3>Doctero</h3>

            <nav>
            {menu.map(({id, name, path}) => (
               <a
               key={id}
               href={path}
               >
                 {name}
               </a>
            ))}
            </nav>
          </div>

          <div className="public-header-button">
           <Link
            href="/signUp"
           >
              <Button
                appearance='outline'
                label='Registrar'
              />
           </Link>

           <Link
            href="/signIn"
           >
              <Button
                label='Entrar'
              />
           </Link>
          </div>
      </header>

      <section
       className='section-main'
      >
        <div className="section-main-content">
           <h1>Doctero, a boa ação que muda o mundo!</h1>

           <p>Pouco ou muito, o que importa? toda boa ação já vale a pena. Para nós, o que interessa mesmo é o gesto.
           </p>

           <Link
            href="/signUp"
           >
              <Button
                label='Cadastre-se agora'
              />
           </Link>
        </div>

        <div className="section-main-image">
          <Image
          src="/public.jpeg"
          alt="Alexandre, o Grande"
          width="540"
          height="392"
          />
        </div>

        <footer className='section-main-footer'>
          <nav>
            {org.map(({id, name, path}) => (
              <Link
              key={id}
              href={path}
              >
                <a>
                  {name}
                </a>
              </Link>
            ))}
          </nav>
        </footer>
      </section>
    </main>
  )
}

export default Home;
