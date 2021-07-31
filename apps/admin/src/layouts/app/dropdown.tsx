import React from 'react';

import { Icon } from '@uxoctopus/core';

import { general } from '~/data';
import { useAuth } from '~/hooks';

import { Item, User } from './button';
import { UserHandles } from './types';

const Dropdown: React.FC<UserHandles> = (props) => {
  const {
    logout,
  } = useAuth();

  return (
    <div className="flex flex-col space-y-12 app-menu-profile-dropdown">
      <User {...props} />

      {general.map(({
        type,
        icon,
        name,
        route,
      }) => {
        switch (type) {
          case 'LINK':
            return (
              <Item
                key={name}
                icon={icon}
                name={name}
                route={route || ''}
              />
            );

          case 'BUTTON':
            return (
              <button
                key={name}
                type="button"
                onClick={logout}
                className="flex p-8 text-p relative rounded-8 items-center app-menu-item"
              >
                <Icon
                  name={icon}
                  className="mr-12"
                />

                {name}
              </button>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default Dropdown;
