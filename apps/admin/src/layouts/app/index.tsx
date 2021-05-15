import React from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '@core/assets/svgs/logo.svg';

import View from './styles';

const App: React.FC = () => (
  <View className="app">
    <div className="app-menu">
      <Logo />
    </div>

    <div className="app-wrapper">
      <Outlet />
    </div>
  </View>
);

export default App;
