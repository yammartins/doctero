import { Icon } from '@uxoctopus/core';

import { general } from '~/data';

import { Item, User } from './button';
import { UserHandles } from './types';

const Dropdown: React.FC<UserHandles> = (props) => (
  <div className="app-menu-profile-dropdown">
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
              onClick={() => {}}
              className="text is-md is-medium app-menu-item"
            >
              <Icon
                size="lg"
                name={icon}
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
