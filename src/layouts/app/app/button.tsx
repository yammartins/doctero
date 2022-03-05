import { Text, Icon } from '@uxoctopus/core';
import { reduce } from '@uxoctopus/helpers';
import Link from 'next/link';

import { UserHandles, ItemHandles } from './types';

export const User: React.FC<UserHandles> = ({ name, status }) => (
  <div className="app-menu-profile-name">
    <Text label={reduce(name, 12)} weight="700" />

    <Text size="sm" label={status} weight="400" />
  </div>
);

export const Item: React.FC<ItemHandles> = ({
  icon,
  name,
  route,
}) => (
  <Link
    key={route}
    href={route}
  >
    <a className="app-menu-item">
      <Icon
        name={icon}
        size="lg"
      />

      <Text
        label={name}
        weight="500"
      />
    </a>
  </Link>
);
