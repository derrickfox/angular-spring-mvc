import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncDemoComponent } from './components/async-demo.component';
import { BricsHeaderComponent } from './components/brics-header.component';
import { BricsLeftNavComponent } from './components/brics-left-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    AsyncDemoComponent, 
    BricsHeaderComponent,
    BricsLeftNavComponent
  ],
  template: `
    <app-brics-header></app-brics-header>
    <app-brics-left-nav>
      <app-async-demo></app-async-demo>
    </app-brics-left-nav>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class AppComponent {}
