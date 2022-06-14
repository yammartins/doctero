import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Text, Icon } from '~/components';
import { AuthHandles } from './types';

const AuthLayout: React.FC<AuthHandles> = ({
  title,
  description,
  back = false,
  children,
}) => {
  const slides = [
    {
      id: 1,
      path: '/slide-1.jpeg',
      alt: 'Itachi',
      header: 'Gerencie seu dinheiro',
      text: 'Otimize e controle seu fluxo de caixa - nós damos você os insights de que precisa para tomar as decisões certas.',
    },
    {
      id: 2,
      path: '/slide-2.webp',
      alt: 'Zoro',
      header: 'Gerencie seu dinheiro',
      text: 'Otimize e controle seu fluxo de caixa - nós damos você os insights de que precisa para tomar as decisões certas.',
    },
    {
      id: 3,
      path: '/public.jpeg',
      alt: 'Jin-Woo',
      header: 'Gerencie seu dinheiro',
      text: 'Otimize e controle seu fluxo de caixa - nós damos você os insights de que precisa para tomar as decisões certas.',
    },
    {
      id: 4,
      path: '/slide-4.png',
      alt: 'Gon',
      header: 'Gerencie seu dinheiro',
      text: 'Otimize e controle seu fluxo de caixa - nós damos você os insights de que precisa para tomar as decisões certas.',
    },
  ];

  const router = useRouter();

  return (
    <main className="auth">
      <div className="auth-content">
        <div className="auth-content-box">
          <div className="auth-content-box-header">
            <Text
              type="h2"
              weight="bold"
              size="3xl"
            >
              {back && (
              <button
                type="button"
                onClick={() => router.back()}
              >
                <Icon
                  name="arrow-left-bold"
                  color="text-gray-800"
                />
              </button>
              )}
              {title}
            </Text>

            {description && (
            <Text
              type="p"
              label={description}
              size="sm"
            />
            )}
          </div>
          <div className="auth-content-box-children">
            {children}
          </div>
        </div>

      </div>

      <aside className="auth-aside">
        <Swiper pagination modules={[Pagination]} className="mySwiper">
          {slides.map(({
            id, path, alt, header, text,
          }) => (
            <SwiperSlide key={id}>
              <div className="auth-aside-slider">
                <Image
                  src={path}
                  alt={alt}
                  width={568}
                  height={412}
                  className="auth-aside-slider-image"
                />

                <div className="auth-aside-slider-description">
                  <Text
                    type="h5"
                    size="lg"
                    label={header}
                    align="center"
                    weight="black"
                    family="jakarta"
                  />

                  <Text
                    type="p"
                    align="center"
                    label={text}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </aside>
    </main>
  );
};

export default AuthLayout;
