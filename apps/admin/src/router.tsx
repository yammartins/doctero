import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAuth } from '~/hooks';

import { Layout } from './layouts';
import { App, Users, Requests } from './pages';

const Router: React.FC = () => {
  const {
    user,
    loading,
  } = useAuth();

  console.log(user, loading);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<App />} />

        <Route path="/users" element={<Users />} />

        <Route path="/requests" element={<Requests />} />
      </Route>
    </Routes>
  );
};

export default Router;
