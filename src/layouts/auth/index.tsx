import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Logo } from '~/assets';
import { Text } from '~/components';
import { View } from '~/styles';

import { AuthHandles } from './types';

const Auth: React.FC<AuthHandles> = ({
  children,
  title,
  description,
}) => {
  const content = [
    {
      id: 1,
      image: '/assets/images/slide-1.jpeg',
      alt: 'Imagem de uma Hárpia-real',
      spotlight: 'A boa ação muda o mundo!',
      text: 'Pouco ou muito, o que importa? toda boa ação já vale a pena. Para nós, o que interessa mesmo é o gesto.',
    },
    {
      id: 2,
      image: '/assets/images/slide-2.jpeg',
      alt: 'Imagem de uma Hárpia-real',
      spotlight: 'A boa ação muda o mundo!',
      text: 'Pouco ou muito, o que importa? toda boa ação já vale a pena. Para nós, o que interessa mesmo é o gesto.',
    },
    {
      id: 3,
      image: '/assets/images/slide-3.jpg',
      alt: 'Imagem de Goethe',
      spotlight: 'A boa ação muda o mundo!',
      text: 'Pouco ou muito, o que importa? toda boa ação já vale a pena. Para nós, o que interessa mesmo é o gesto.',
    },
  ];

  return (
    <View>

      <div className="container">

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

        <div className="slides">

          <Swiper
            pagination
            modules={[Pagination]}
            className="mySwiper"
          >
            {content.map(({
              id, image, spotlight, text, alt,
            }) => (
              <SwiperSlide key={id}>

                <Image
                  src={image}
                  alt={alt}
                  width="568px"
                  height="412px"
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

              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>

    </View>
  );
};

export default Auth;
