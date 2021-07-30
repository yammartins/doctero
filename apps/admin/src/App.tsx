import '@uxoctopus/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { NotifyProvider } from '@uxoctopus/core';

import { MainStyles } from '@core/styles';

import { AuthProvider } from '~/auth';

import Router from './router';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <NotifyProvider>
        <MainStyles />
        <Router />
      </NotifyProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
