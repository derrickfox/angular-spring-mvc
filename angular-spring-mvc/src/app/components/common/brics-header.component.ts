import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { BricsButtonDropdownComponent } from './brics-button-dropdown';

@Component({
  selector: 'app-brics-header',
  standalone: true,
  imports: [MatToolbarModule, BricsButtonDropdownComponent, MatMenuModule],
  template: `
    <mat-toolbar color="primary">
      <span>Angular Spring MVC Demo</span>
      <div class="spacer"></div>
      <app-brics-button-dropdown buttonText="Select Option">
        <button mat-menu-item>Option 1</button>
        <button mat-menu-item>Option 2</button>
        <button mat-menu-item>Option 3</button>
      </app-brics-button-dropdown>
    </mat-toolbar>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    mat-toolbar {
      background: #0078d4;  /* Azure blue primary color */
    }

    .spacer {
      flex: 1 1 auto;  /* This pushes the dropdown to the right */
    }
  `]
})
export class BricsHeaderComponent {}