import { useState } from 'react';

import { Icon, Button, Tooltip } from '@uxoctopus/core';

import { Logo } from '~/assets';
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
      className="app"
    >
      <div className="app-menu">
        <Logo className="app-menu-logo" />

        <div className="app-menu-items">
          {donor.map(({ name, ...rest }) => (
            <Item
              {...rest}
              key={name}
              name={name}
            />
          ))}
        </div>

        <div className="app-menu-profile">
          <Tooltip
            content={<Dropdown name="Yuri Martins" status={roles.STANDARD} />}
            transition="click"
            orientation="right-bottom"
          >
            <div className="app-menu-profile-picture">
              <Icon
                size="lg"
                name="user"
              />
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
          className="app-menu-button"
        />
      </div>

      <div className="app-wrapper">
        {children}
      </div>
    </View>
  );
};

export default App;
