import Image from 'next/image';
import { useRouter } from 'next/router';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Logo, Return } from '~/assets';
import { Text } from '~/components';
import { View } from '~/styles';

import { AuthHandles } from './types';

const Auth: React.FC<AuthHandles> = ({
  children,
  title,
  description,
  previous,
}) => {
  const content = [
    {
      id: 1,
      image: '/assets/images/slide.jpeg',
      alt: 'Imagem de uma Hárpia-real',
      spotlight: 'A boa ação muda o mundo!',
      text: 'Pouco ou muito, o que importa? toda boa ação já vale a pena. Para nós, o que interessa mesmo é a intenção.',
    },
    {
      id: 2,
      image: '/assets/images/slide.jpeg',
      alt: 'Imagem de uma Hárpia-real',
      spotlight: 'A boa ação muda o mundo!',
      text: 'Pouco ou muito, o que importa? toda boa ação já vale a pena. Para nós, o que interessa mesmo é a intenção.',
    },
    {
      id: 3,
      image: '/assets/images/slide.jpeg',
      alt: 'Imagem de Goethe',
      spotlight: 'A boa ação muda o mundo!',
      text: 'Pouco ou muito, o que importa? toda boa ação já vale a pena. Para nós, o que interessa mesmo é a intenção.',
    },
  ];

  const router = useRouter();

  return (
    <View>

      <div className="container">

        {previous && (
          <Return onClick={() => router.back()} className="return" />
        )}

        <div className="main">

          <div className="main-header">
            <Logo className="logo" />

            <Text
              label={title}
              type="h1"
              size="lg"
              weight="700"
              family="poppins"
              align="center"
            />

            <Text
              label={description}
              className="auth-description"
              align="center"
            />
          </div>

          <div className="main-body">

            {children}

          </div>
        </div>

        <div className="slide">

          <Swiper
            pagination
            modules={[Pagination]}
            className="authSwiper"
          >
            {content.map(({
              id, image, spotlight, text, alt,
            }) => (
              <SwiperSlide key={id}>

                <div className="slide-content-wrapper">
                  <Image
                    src={image}
                    alt={alt}
                    width="568px"
                    height="412px"
                    className="slide-image"
                  />

                  <Text
                    type="h2"
                    label={spotlight}
                    size="xlg"
                    weight="700"
                    family="poppins"
                    align="center"
                  />

                  <Text
                    label={text}
                    family="poppins"
                    align="center"
                  />
                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>

    </View>
  );
};

export default Auth;
