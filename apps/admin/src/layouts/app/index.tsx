import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Picture from '@core/assets/images/user.png';
import { ReactComponent as Logo } from '@core/assets/svgs/logo.svg';
import { Button, Tooltip } from '@uxoctopus/core';

import { donor } from '../../data';
import { User, Item } from './button';
import Dropdown from './dropdown';
import View from './styles';

const App: React.FC = () => {
  const [drawer, onDrawer] = useState(false);

  return (
    <View
      drawer={drawer}
      className="app flex h-full relative"
    >
      <div className="flex fixed p-24 flex-col h-screen app-menu">
        <Logo className="w-full" />

        <div className="flex mt-96 flex-col space-y-20 app-menu-items">
          {donor.map(({ name, ...rest }) => (
            <Item
              {...rest}
              key={name}
              name={name}
            />
          ))}
        </div>

        <div className="mt-auto pt-24 app-menu-profile">
          <Tooltip
            content={<Dropdown name="Raquel Prado" status="Doadora VIP" />}
            className="z-50 cursor-pointer"
            transition="click"
            orientation="right-bottom"
          >
            <img
              src={Picture}
              alt=""
              className="w-48 h-48 rounded-full"
            />

            <User name="Raquel Prado" status="Doadora VIP" />
          </Tooltip>
        </div>

        <Button
          size="xs"
          icon="chevron-right"
          rounded="xl"
          onClick={() => onDrawer(! drawer)}
          className="w-min z-10 absolute bottom-96 -right-20 app-menu-button"
        />
      </div>

      <div className="p-56 w-full h-full app-wrapper">
        <Outlet />
      </div>
    </View>
  );
};

export default App;
