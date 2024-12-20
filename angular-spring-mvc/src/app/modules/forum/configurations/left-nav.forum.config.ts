import { NavConfig } from '../../../models/left-nav-config.model';

export const forumNavConfig: NavConfig = {
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
        },
        {
          label: 'Async Demo',
          route: '/forum/async-demo'
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