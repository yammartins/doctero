import '@uxoctopus/styles';

import { AppProps } from 'next/app';

import { MainStyles } from '@core/styles';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div className="app">
    <MainStyles />

    <Component {...pageProps} />
  </div>
);

export default App;
