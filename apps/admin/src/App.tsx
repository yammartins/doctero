import '@uxoctopus/styles';
import React from 'react';

import { MainStyles } from '@core/styles';

import Router from './router';

const App: React.FC = () => (
  <>
    <MainStyles />
    <Router />
  </>
);

export default App;
