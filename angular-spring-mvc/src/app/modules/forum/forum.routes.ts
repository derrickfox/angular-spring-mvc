import { Routes } from '@angular/router';
import { ListOfForumPostsComponent } from './pages/list-of-forum-posts';
import { ViewForumPostComponent } from './pages/view-forum-post.component';
import { WelcomePageComponent } from '../../pages/welcome-page.component';

export const forumRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListOfForumPostsComponent },
      { path: 'posts', component: ListOfForumPostsComponent },
      { path: 'post/:id', component: ViewForumPostComponent },
      { path: 'welcome', component: WelcomePageComponent }
    ]
  }
];