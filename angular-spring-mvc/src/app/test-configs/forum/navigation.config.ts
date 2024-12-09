import { NavConfig } from '../../modules/forum/models/forum-nav-config';

export const navigationConfig: NavConfig = {
  items: [
    {
      label: 'Home',
      icon: 'home',
      route: '/forum'
    },
    {
      label: 'Forum',
      icon: 'forum',
      children: [
        {
          label: 'All Posts',
          route: '/forum/posts'
        },
        {
          label: 'Welcome',
          route: '/forum/welcome'
        }
      ]
    },
    {
      label: 'Repository',
      icon: 'storage',
      route: '/repository'
    },
    {
      label: 'Meta Study',
      icon: 'science',
      route: '/meta-study'
    }
  ]
};