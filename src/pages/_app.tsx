import { AppProps } from 'next/app';

import { GlobalStyles } from '~/styles';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />

    <Component {...pageProps} />
  </>
);

export default App;
