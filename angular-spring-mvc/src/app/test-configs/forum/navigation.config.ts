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
    },
    {
      label: 'Data Management',
      icon: 'storage',
      children: [
        {
          label: 'Repository',
          children: [
            {
              label: 'Clinical Data',
              children: [
                {
                  label: 'View Records',
                  route: '/data/clinical/view'
                },
                {
                  label: 'Add Record',
                  route: '/data/clinical/add'
                }
              ]
            },
            {
              label: 'Imaging Data',
              children: [
                {
                  label: 'Browse Images',
                  route: '/data/imaging/browse'
                },
                {
                  label: 'Upload Image',
                  route: '/data/imaging/upload'
                }
              ]
            }
          ]
        },
        {
          label: 'Dictionary',
          children: [
            {
              label: 'Forms',
              children: [
                {
                  label: 'Form Builder',
                  route: '/dictionary/forms/builder'
                },
                {
                  label: 'Templates',
                  route: '/dictionary/forms/templates'
                }
              ]
            },
            {
              label: 'Variables',
              children: [
                {
                  label: 'Search Variables',
                  route: '/dictionary/variables/search'
                },
                {
                  label: 'Add Variable',
                  route: '/dictionary/variables/add'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Query Tool',
      icon: 'search',
      children: [
        {
          label: 'Saved Queries',
          children: [
            {
              label: 'My Queries',
              children: [
                {
                  label: 'Recent Queries',
                  route: '/query/saved/recent'
                },
                {
                  label: 'Archived Queries',
                  route: '/query/saved/archived'
                }
              ]
            }
          ]
        },
        {
          label: 'New Query',
          route: '/query/new'
        }
      ]
    }
  ]
};