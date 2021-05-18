import React from 'react';

import { Icon } from '@uxoctopus/core';

import { general } from '../../data';
import { Item, User } from './button';

const Dropdown: React.FC = () => (
  <div className="flex flex-col app-menu-profile-dropdown">
    <User />

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

export default Dropdown;
