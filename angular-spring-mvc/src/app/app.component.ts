import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="debug">DEBUG: App Component Loaded</div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
    .debug {
      background-color: yellow;
      padding: 5px;
      margin: 5px;
      border: 1px solid red;
    }
  `]
})
export class AppComponent {
  constructor() {
    console.log('AppComponent initialized');
  }
}
 