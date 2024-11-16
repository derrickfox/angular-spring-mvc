import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncDemoComponent } from './components/async-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AsyncDemoComponent],
  template: `
    <div>
      <h1>Angular Spring MVC Demo</h1>
      <app-async-demo></app-async-demo>
    </div>
  `
})
export class AppComponent {}
