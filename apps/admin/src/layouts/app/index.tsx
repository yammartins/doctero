import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import User from '@core/assets/images/user.png';
import { ReactComponent as Logo } from '@core/assets/svgs/logo.svg';
import { Icon, Text, Tooltip } from '@uxoctopus/core';
import { reduce } from '@uxoctopus/helpers';

import { donor, general } from '../../data';
import View from './styles';

const Dropdown: React.FC = () => (
  <div className="app-menu-profile-dropdown">
    {general.map(({ icon, name, route }) => (route
      ? (
        <NavLink
          to={route}
          key={route}
          className="flex p-8 text-p items-center app-menu-item"
        >
          <Icon
            name={icon}
            className="mr-12"
          />

          {name}
        </NavLink>
      )
      : <div />))}
  </div>
);

const App: React.FC = () => (
  <View className="app flex h-full relative">
    <div className="flex fixed p-24 flex-col h-screen app-menu">
      <Logo />

      <div className="flex mt-80 flex-col app-menu-items">
        {donor.map(({ icon, name, route }) => (
          <NavLink
            to={route}
            key={route}
            className="flex p-8 text-p items-center app-menu-item"
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
          className="cursor-pointer"
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
    </div>

    <div className="app-wrapper">
      <Outlet />
    </div>
  </View>
);

export default App;
