import { Routes } from '@angular/router';
import { WelcomePageComponent } from '../../pages/welcome-page.component';

export const metaStudyRoutes: Routes = [
  {
    path: '',
    children: [
      // Meta-study routes will go here
      { path: '', component: WelcomePageComponent },
    ]
  }
];