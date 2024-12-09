import { NavConfig } from '../../../models/left-nav-config.model';

export const forumNavConfig: NavConfig = {
  items: [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      children: [
        {
          label: 'All Posts',
          route: '/forum/posts'
        },
        {
          label: 'Data Table',
          route: '/forum/table'
        }
      ]
    },
    // ... other navigation items
  ]
};