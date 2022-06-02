import type { AppProps } from 'next/app'
import "swiper/css";
import "swiper/css/pagination";
import "~/styles/main.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
