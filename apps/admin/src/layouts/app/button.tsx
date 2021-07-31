import React from 'react';
import { NavLink } from 'react-router-dom';

import { Text, Icon } from '@uxoctopus/core';
import { reduce } from '@uxoctopus/helpers';

import { UserHandles, ItemHandles } from './types';

export const User: React.FC<UserHandles> = ({ name, status }) => (
  <div className="ml-12 whitespace-nowrap app-menu-profile-name">
    <Text label={reduce(name, 12)} weight="700" />

    <Text type="span" label={status} weight="400" />
  </div>
);

export const Item: React.FC<ItemHandles> = ({
  icon,
  name,
  route,
}) => (
  <NavLink
    to={route}
    key={route}
    end={route === '/'}
    className="flex p-8 relative rounded-8 items-center app-menu-item"
  >
    <Icon
      name={icon}
      className="text-p"
    />

    <Text
      label={name}
      weight="500"
      className="ml-12 left-0 relative opacity-100 whitespace-nowrap"
    />
  </NavLink>
);
