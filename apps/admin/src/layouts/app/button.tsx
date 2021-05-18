import React from 'react';
import { NavLink } from 'react-router-dom';

import { Text, Icon } from '@uxoctopus/core';
import { reduce } from '@uxoctopus/helpers';

import { ItemHandles } from './types';

export const User: React.FC = () => (
  <div className="ml-12 app-menu-profile-name">
    <Text label={reduce('Raquel Prado', 12)} weight="700" />

    <Text type="span" label="Doadora VIP" weight="400" />
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
