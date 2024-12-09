import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Router } from '@angular/router';
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
      <mat-tab-group [selectedIndex]="getCurrentTabIndex()" (selectedTabChange)="onTabChange($event)">
        <mat-tab *ngFor="let tab of tabs" [label]="tab.label">
          <div class="tab-content">
            <ng-container *ngIf="isCurrentRoute(tab.route)">
              <app-brics-left-nav *ngIf="tab.showNav">
                <router-outlet></router-outlet>
              </app-brics-left-nav>
              <div *ngIf="!tab.showNav" class="no-nav-content">
                <router-outlet></router-outlet>
              </div>
            </ng-container>
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

  constructor(private router: Router) {}

  getCurrentTabIndex(): number {
    const currentRoute = this.router.url.split('/')[1]; // Get the first segment
    return this.tabs.findIndex(tab => tab.route.includes(currentRoute)) || 0;
  }

  isCurrentRoute(route: string): boolean {
    return this.router.url.startsWith(route);
  }

  onTabChange(event: any) {
    const selectedTab = this.tabs[event.index];
    this.router.navigate([selectedTab.route]);
  }
}