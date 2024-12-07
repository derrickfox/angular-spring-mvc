import { Routes } from '@angular/router';
import { BricsPageRouterComponent } from './components/brics-page-router.component';
import { WelcomePageComponent } from './pages/forum/welcome-page.component';
import { BricsTableComponent } from './components/brics-table.component';
import { AsyncDemoComponent } from './components/async-demo.component';
import { ListOfForumPostsComponent } from './pages/forum/list-of-forum-posts';

export const routes: Routes = [
  {
    path: '',
    component: BricsPageRouterComponent,
    children: [
      {
        path: '',
        component: WelcomePageComponent
      },
      {
        path: 'table',
        component: BricsTableComponent
      },
      {
        path: 'async',
        component: AsyncDemoComponent
      },
      {
        path: 'forum/posts',
        component: ListOfForumPostsComponent
      }
    ]
  }
];
