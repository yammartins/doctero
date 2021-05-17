import React from 'react';
import { NavLink } from 'react-router-dom';

import { Icon } from '@uxoctopus/core';

import { general } from '../../data';

const Dropdown: React.FC = () => (
  <div className="flex flex-col app-menu-profile-dropdown">
    {general.map(({
      type,
      icon,
      name,
      route,
    }) => {
      switch (type) {
        case 'LINK':
          return (
            <NavLink
              to={route || ''}
              key={name}
              className="flex p-8 text-p relative rounded-8 items-center app-menu-item"
            >
              <Icon
                name={icon}
                className="mr-12"
              />

              {name}
            </NavLink>
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
