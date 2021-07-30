import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@core/auth';

import { Layout } from './layouts';
import { App } from './pages';

const Router: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default Router;
