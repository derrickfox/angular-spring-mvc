import { Routes } from '@angular/router';
import { BricsPageRouterComponent } from './components/brics-page-router.component';
import { WelcomePageComponent } from './pages/welcome-page.component';
import { BricsTableComponent } from './components/brics-table.component';
import { AsyncDemoComponent } from './components/async-demo.component';

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
      }
    ]
  }
];
