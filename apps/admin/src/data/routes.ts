import { routes } from '@core/i18n';

export const donor = [
  {
    icon: 'template',
    name: routes.dashboard,
    route: '/',
  },
  {
    icon: 'collection', // cube
    name: routes.products,
    route: '/products',
  },
  {
    icon: 'chart-bar',
    name: routes.requests,
    route: '/requests',
  },
];

export const company = [];

export const general = [
  {
    type: 'LINK',
    icon: 'support',
    name: routes.support,
    route: '/support',
  },
  {
    type: 'LINK',
    icon: 'cog',
    name: routes.settings,
    route: '/settings',
  },
  {
    type: 'BUTTON',
    icon: 'logout',
    name: routes.logout,
  },
];

export const grantee = [];
