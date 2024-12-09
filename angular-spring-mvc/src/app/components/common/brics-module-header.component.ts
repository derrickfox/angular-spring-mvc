import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { BricsLeftNavComponent } from './brics-left-nav.component';

interface ModuleTab {
  label: string;
  route: string;
  showNav?: boolean;
}

@Component({
  selector: 'app-brics-module-header',
  standalone: true,
  imports: [CommonModule, MatTabsModule, RouterModule, BricsLeftNavComponent],
  template: `
    <div class="module-container">
      <mat-tab-group (selectedTabChange)="onTabChange($event)">
        <mat-tab *ngFor="let tab of tabs" [label]="tab.label">
          <div class="tab-content">
            <app-brics-left-nav *ngIf="tab.showNav">
              <router-outlet></router-outlet>
            </app-brics-left-nav>
            <div *ngIf="!tab.showNav" class="no-nav-content">
              <router-outlet></router-outlet>
            </div>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .module-container {
      display: flex;
      flex-direction: column;
      height: calc(100vh - 64px); /* Subtract header height */
    }

    .tab-content {
      height: 100%;
      overflow: auto;
    }

    .no-nav-content {
      padding: 20px;
    }

    :host ::ng-deep .mat-mdc-tab-group {
      height: 100%;
    }

    :host ::ng-deep .mat-mdc-tab-body-wrapper {
      height: 100%;
    }
  `]
})
export class BricsModuleHeaderComponent {
  @Input() tabs: ModuleTab[] = [
    { label: 'Forum', route: '/forum', showNav: true },
    { label: 'Data Repository', route: '/repository' },
    { label: 'Meta Study', route: '/meta-study' }
  ];

  onTabChange(event: any) {
    // Handle tab change if needed
  }
}