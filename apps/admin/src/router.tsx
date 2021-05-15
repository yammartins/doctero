import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Layout } from './layouts';
import { App } from './pages';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
