import { NavConfig } from '../../models/forum/forum-nav-config';

export const navigationConfig: NavConfig = {
  items: [
    {
      label: 'Home',
      icon: 'home',
      route: '/'
    },
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
          route: '/table'
        },
        {
          label: 'Async Demo',
          route: '/async'
        }
      ]
    },
    {
      label: 'Settings',
      icon: 'settings',
      children: [
        {
          label: 'Profile',
          route: '/profile'
        }
      ]
    }
  ]
};