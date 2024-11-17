import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncDemoComponent } from './components/async-demo.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AsyncDemoComponent, MatToolbarModule],
  template: `
    <mat-toolbar color="primary">
      <span>Angular Spring MVC Demo</span>
    </mat-toolbar>
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
