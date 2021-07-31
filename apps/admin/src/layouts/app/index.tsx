import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Icon, Button, Tooltip } from '@uxoctopus/core';

import { ReactComponent as Logo } from '@core/assets/svgs/logo.svg';

import { donor } from '~/data';
import { useAuth } from '~/hooks';

import { User, Item } from './button';
import Dropdown from './dropdown';
import View from './styles';

const App: React.FC = () => {
  const [drawer, onDrawer] = useState(false);

  const {
    user,
  } = useAuth();

  const roles = {
    STANDARD: 'Standard',
    SUPERVISOR: 'Supervisor',
  };

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

        {user && (
          <div className="mt-auto pt-24 app-menu-profile">
            <Tooltip
              content={<Dropdown name={user.name} status={roles[user.type || 'STANDARD']} />}
              className="z-50 cursor-pointer"
              transition="click"
              orientation="right-bottom"
            >
              <div className="flex w-48 h-48 items-center rounded-full justify-center app-menu-profile-picture">
                <Icon name="user" />
              </div>

              <User
                name={user.name}
                status={roles[user.type || 'STANDARD']}
              />
            </Tooltip>
          </div>
        )}

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
