import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BricsHeaderComponent } from './components/brics-header.component';
import { BricsLeftNavComponent } from './components/brics-left-nav.component';
import { BricsTableComponent } from './components/brics-table.component';
import { BricsButtonDropdownComponent } from './components/brics-button-dropdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    BricsHeaderComponent,
    BricsLeftNavComponent,
    BricsTableComponent
  ],
  template: `
    <app-brics-header></app-brics-header>
    <app-brics-left-nav>
      <app-brics-table></app-brics-table>
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
