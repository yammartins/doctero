import '@uxoctopus/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { NotifyProvider } from '@uxoctopus/core';
import { useDarkMode } from '@uxoctopus/hooks';
import { ThemeProvider } from 'styled-components';

import { dark, light, MainStyles } from '@core/styles';

import { AuthProvider } from '~/auth';

import Router from './router';

const App: React.FC = () => {
  const {
    theme,
    toggle,
  } = useDarkMode();

  const mode = theme === 'light' ? light : dark;

  return (
    <ThemeProvider theme={mode}>
      <BrowserRouter>
        <AuthProvider>
          <NotifyProvider>
            <MainStyles />
            <Router />
          </NotifyProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
