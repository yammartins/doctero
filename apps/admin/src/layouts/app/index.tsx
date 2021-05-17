import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import User from '@core/assets/images/user.png';
import { ReactComponent as Logo } from '@core/assets/svgs/logo.svg';
import {
  Icon,
  Text,
  Button,
  Tooltip,
} from '@uxoctopus/core';
import { reduce } from '@uxoctopus/helpers';

import { donor } from '../../data';
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
        <Logo />

        <div className="flex mt-96 flex-col space-y-16 app-menu-items">
          {donor.map(({ icon, name, route }) => (
            <NavLink
              to={route}
              key={route}
              className="flex p-8 text-p relative rounded-8 items-center app-menu-item"
            >
              <Icon
                name={icon}
                className="mr-12"
              />

              {name}
            </NavLink>
          ))}
        </div>

        <div className="mt-auto pt-24 app-menu-profile">
          <Tooltip
            content={<Dropdown />}
            className="z-50 cursor-pointer"
            transition="click"
            orientation="right-center"
          >
            <img
              src={User}
              alt=""
              className="w-48 h-48 rounded-full"
            />

            <div className="ml-12 app-menu-profile-name">
              <Text label={reduce('Raquel Prado', 12)} weight="700" />

              <Text type="span" label="Doadora VIP" weight="400" />
            </div>
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

      <div className="app-wrapper">
        <Outlet />
      </div>
    </View>
  );
};

export default App;
