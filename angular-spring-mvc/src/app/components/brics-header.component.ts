import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-brics-header',
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar color="primary">
      <span>Angular Spring MVC Demo</span>
    </mat-toolbar>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    mat-toolbar {
      background: #0078d4;  /* Azure blue primary color */
    }
  `]
})
export class BricsHeaderComponent {}