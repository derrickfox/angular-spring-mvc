import { NavConfig } from '../../../models/left-nav-config.model';

export const dataRepositoryNavConfig: NavConfig = {
  items: [
    {
      label: 'Home',
      icon: 'home',
      route: '/forum'
    },
    {
      label: 'Data Repository',
      icon: 'storage',
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