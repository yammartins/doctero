import React from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '@core/assets/svgs/logo.svg';

import View from './styles';

const App: React.FC = () => (
  <View className="app flex h-full relative">
    <div className="fixed h-screen app-menu">
      <Logo />
    </div>

    <div className="app-wrapper">
      <Outlet />
    </div>
  </View>
);

export default App;
