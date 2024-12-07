import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BricsHeaderComponent } from './brics-header.component';
import { BricsLeftNavComponent } from './brics-left-nav.component';

@Component({
  selector: 'app-brics-page-router',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BricsHeaderComponent,
    BricsLeftNavComponent
  ],
  template: `
    <div class="page-container">
      <app-brics-header></app-brics-header>
      <app-brics-left-nav>
        <router-outlet></router-outlet>
      </app-brics-left-nav>
    </div>
  `,
  styles: [`
    .page-container {
      display: block;
      height: 100%;
      background-color: #f5f5f5;
    }
  `]
})
export class BricsPageRouterComponent {
  constructor() {
    console.log('BricsPageRouterComponent initialized');
  }
}