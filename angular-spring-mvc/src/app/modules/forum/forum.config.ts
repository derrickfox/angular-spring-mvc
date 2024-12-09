import { NavConfig } from '../forum/models/forum-nav-config';

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