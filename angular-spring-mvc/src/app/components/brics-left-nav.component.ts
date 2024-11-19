import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brics-left-nav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIconModule, CommonModule],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav mode="side" opened class="sidenav">
        <mat-nav-list>
          <a mat-list-item>
            <mat-icon matListItemIcon>home</mat-icon>
            <span matListItemTitle>Home</span>
          </a>
          <div class="nav-item" [class.active]="expandedSection === 'dashboard'">
            <a mat-list-item (click)="toggle('dashboard')">
              <mat-icon matListItemIcon>dashboard</mat-icon>
              <span matListItemTitle>Dashboard</span>
            </a>
            <mat-icon class="caret-icon" [ngClass]="{'expanded': expandedSection === 'dashboard'}">
              {{ expandedSection === 'dashboard' ? 'expand_more' : 'chevron_right' }}
            </mat-icon>
          </div>
          <div *ngIf="expandedSection === 'dashboard'" class="sub-level">
            <a mat-list-item>
              <span matListItemTitle>List Posts</span>
            </a>
          </div>
          <div class="nav-item" [class.active]="expandedSection === 'settings'">
            <a mat-list-item (click)="toggle('settings')">
              <mat-icon matListItemIcon>settings</mat-icon>
              <span matListItemTitle>Settings</span>
            </a>
            <mat-icon class="caret-icon" [ngClass]="{'expanded': expandedSection === 'settings'}">
              {{ expandedSection === 'settings' ? 'expand_more' : 'chevron_right' }}
            </mat-icon>
          </div>
          <div *ngIf="expandedSection === 'settings'" class="sub-level">
            <a mat-list-item>
              <span matListItemTitle>Profile</span>
            </a>
          </div>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .sidenav-container {
      height: calc(100vh - 64px);
    }
    
    .sidenav {
      width: 250px;
      background-color: #f5f5f5;
    }
    
    mat-nav-list {
      padding-top: 16px;
    }
    
    .mat-icon {
      margin-right: 8px;
      color: #666;
    }

    .nav-item {
      position: relative;
      display: flex;
      align-items: center;
    }

    .nav-item.active {
      background-color: rgba(0, 0, 0, 0.04);
    }

    .nav-item a[mat-list-item] {
      flex: 1;
    }

    .caret-icon {
      position: absolute;
      right: 16px;
      color: #666;
    }

    .sub-level {
      padding-left: 32px;
    }
  `]
})
export class BricsLeftNavComponent {
  expandedSection: string | null = 'dashboard';

  toggle(section: string): void {
    this.expandedSection = this.expandedSection === section ? null : section;
  }
}