import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BricsHeaderComponent } from './brics-header.component';
import { BricsModuleHeaderComponent } from './brics-module-header.component';

@Component({
  selector: 'app-brics-page-router',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BricsHeaderComponent,
    BricsModuleHeaderComponent
  ],
  template: `
    <div class="page-container">
      <app-brics-header></app-brics-header>
      <app-brics-module-header></app-brics-module-header>
    </div>
  `,
  styles: [`
    .page-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      background-color: #f5f5f5;
    }
  `]
})
export class BricsPageRouterComponent {}