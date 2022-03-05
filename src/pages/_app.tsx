import '@uxoctopus/icons';
import '@uxoctopus/styles';

import { NotifyProvider } from '@uxoctopus/core';
import { useDarkMode } from '@uxoctopus/hooks';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { dark, light, MainStyles } from '~/styles';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const {
    theme,
  } = useDarkMode();

  const mode = theme === 'light' ? light : dark;

  return (
    <ThemeProvider theme={mode}>
      <MainStyles />

      <NotifyProvider>
        <Component {...pageProps} />
      </NotifyProvider>
    </ThemeProvider>
  );
};

export default App;
