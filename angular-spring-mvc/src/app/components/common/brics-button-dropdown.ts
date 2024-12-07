import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brics-button-dropdown',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, CommonModule],
  template: `
    <button mat-button [matMenuTriggerFor]="menu" class="dropdown-button">
      {{ buttonText }}
    </button>
    <mat-menu #menu="matMenu">
      <ng-content></ng-content>
    </mat-menu>
  `,
  styles: [`
    .dropdown-button {
      height: 36px;  /* Standard Material button height */
      line-height: 36px;
      background-color: rgba(255, 255, 255, 0.1);  /* Semi-transparent white */
      color: white;
      border-radius: 4px;
      padding: 0 16px;
      min-width: 120px;
    }

    .dropdown-button:hover {
      background-color: rgba(255, 255, 255, 0.2);  /* Lighter on hover */
    }

    ::ng-deep .mat-mdc-menu-item {
      height: 36px !important;
      line-height: 36px !important;
    }

    ::ng-deep .mat-mdc-menu-content {
      padding: 0 !important;
    }

    ::ng-deep .mat-mdc-menu-panel {
      min-width: 120px !important;  /* Match button width */
    }
  `]
})
export class BricsButtonDropdownComponent {
  @Input() buttonText: string = 'Select Option';
}