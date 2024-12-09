import { Routes } from '@angular/router';
import { BricsPageRouterComponent } from './components/common/brics-page-router.component';

export const routes: Routes = [
  {
    path: '',
    component: BricsPageRouterComponent,
    children: [
      {
        path: 'forum',
        loadChildren: () => import('./modules/forum/forum.routes').then(m => m.forumRoutes)
      },
      {
        path: 'repository',
        loadChildren: () => import('./modules/repository/repository.routes').then(m => m.repositoryRoutes)
      },
      {
        path: 'meta-study',
        loadChildren: () => import('./modules/meta-study/meta-study.routes').then(m => m.metaStudyRoutes)
      },
      {
        path: '',
        redirectTo: 'forum',
        pathMatch: 'full'
      }
    ]
  }
];
