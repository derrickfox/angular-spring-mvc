import { NavConfig } from '../../../models/left-nav-config.model';

export const metaStudyNavConfig: NavConfig = {
  items: [
    {
      label: 'Home',
      icon: 'home',
      route: '/forum'
    },
    {
      label: 'Meta Study',
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
      label: 'Forum',
      icon: 'storage',
      route: '/repository'
    },
    {
      label: 'Data Repository',
      icon: 'science',
      route: '/meta-study'
    }
  ]
};