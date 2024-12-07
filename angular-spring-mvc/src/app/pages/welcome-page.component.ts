import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="welcome-container">
      <div>DEBUG: Welcome Page Component Loaded</div>
      <h1>Welcome to the BRICS Demo</h1>
    </div>
  `,
  styles: [`
    .welcome-container {
      padding: 20px;
      background-color: white;
      margin: 20px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    h1 {
      color: #0078d4;
      font-size: 2em;
      margin-bottom: 20px;
    }
  `]
})
export class WelcomePageComponent {
  constructor() {
    console.log('WelcomePageComponent initialized');
  }
}