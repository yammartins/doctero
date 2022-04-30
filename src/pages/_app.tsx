import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { colors } from '~/styles';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={colors}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
