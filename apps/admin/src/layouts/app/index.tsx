import React from 'react';
import { Outlet } from 'react-router-dom';

import View from './styles';

const App: React.FC = () => (
  <View className="app">
    <div className="app-menu">
      <h1>Hello</h1>
    </div>

    <div className="app-wrapper">
      <Outlet />
    </div>
  </View>
);

export default App;
