import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncDemoComponent } from './components/async-demo.component';
import { BricsHeaderComponent } from './components/brics-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AsyncDemoComponent, BricsHeaderComponent],
  template: `
    <app-brics-header></app-brics-header>
    <app-async-demo></app-async-demo>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class AppComponent {}
