import 'swiper/css';
import 'swiper/css/pagination';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '~/styles';
import { colors } from '~/styles';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />

    <ThemeProvider theme={colors}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
