import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './layouts';
import { Users, Requests, Dashboard } from './pages';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Dashboard />} />

      <Route path="/users" element={<Users />} />

      <Route path="/requests" element={<Requests />} />
    </Route>
  </Routes>
);

export default Router;
