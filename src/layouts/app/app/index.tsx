import { useState } from 'react';

import { Icon, Button, Tooltip } from '@uxoctopus/core';

import Logo from '~/assets/logo.svg';
import { donor } from '~/data';

import { User, Item } from './button';
import Dropdown from './dropdown';
import View from './styles';

const App: React.FC = ({ children }) => {
  const [drawer, onDrawer] = useState(false);

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
        <Logo />

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
            content={<Dropdown name="Yuri Martins" status={roles.STANDARD} />}
            className="z-50 cursor-pointer"
            transition="click"
            orientation="right-bottom"
          >
            <div className="flex w-48 h-48 items-center rounded-full justify-center app-menu-profile-picture">
              <Icon name="user" />
            </div>

            <User
              name="Yuri Martins"
              status={roles.STANDARD}
            />
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
        {children}
      </div>
    </View>
  );
};

export default App;
