import { Routes } from '@angular/router';
import { BricsPageRouterComponent } from './components/brics-page-router.component';
import { WelcomePageComponent } from './pages/forum/welcome-page.component';
import { BricsTableComponent } from './components/brics-table.component';
import { AsyncDemoComponent } from './components/async-demo.component';
import { ListOfForumPostsComponent } from './pages/forum/list-of-forum-posts';
import { ViewForumPostComponent } from './pages/forum/view-forum-post.component';
import { BricsForumTopicSelectorComponent } from './components/forum/brics-forum-topic-selector.component';

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
      },
      {
        path: 'forum/post/:id',
        component: ViewForumPostComponent
      },
      {
        path: 'forum',
        children: [
          { path: '', component: ListOfForumPostsComponent },
          { path: 'topic/:id', component: BricsForumTopicSelectorComponent },
          { path: 'post/:id', component: ViewForumPostComponent }
        ]
      }
    ]
  }
];
