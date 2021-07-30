import '@uxoctopus/styles';
import React from 'react';

import { MainStyles } from '@core/styles';
import { NotifyProvider } from '@uxoctopus/core';

import Router from './router';

const App: React.FC = () => (
  <NotifyProvider>
    <MainStyles />
    <Router />
  </NotifyProvider>
);

export default App;
