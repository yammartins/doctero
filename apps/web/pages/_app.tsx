import '@uxoctopus/styles';
import { MainStyles } from '@core/styles';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div className="app">
    <MainStyles />

    <Component {...pageProps} />
  </div>
);

export default App;
