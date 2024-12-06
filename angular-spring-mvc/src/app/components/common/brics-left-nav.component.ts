import { Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NavConfig } from '../../models/forum/forum-nav-config';
import { navigationConfig } from '../../test-configs/forum/navigation.config';

@Component({
  selector: 'app-brics-left-nav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIconModule, CommonModule, RouterModule],
  animations: [
    trigger('expandCollapse', [
      state('void', style({
        height: '0',
        opacity: '0'
      })),
      state('*', style({
        height: '*',
        opacity: '1'
      })),
      transition('void <=> *', animate('200ms ease-in-out'))
    ])
  ],
  styles: [`
    .nav-item {
      display: flex;
      align-items: center;
      position: relative;
    }
    
    .caret-icon {
      position: absolute;
      right: 16px;
      transition: transform 0.2s ease;
    }
    
    .caret-icon.expanded {
      transform: rotate(90deg);
    }
    
    .sidenav-container {
      height: 100vh;
    }
    
    .sidenav {
      min-height: 100vh;
      width: 240px;
    }
    
    .nav-children {
      padding-left: 24px;
    }
    
    .nav-child-item {
      padding-left: 32px;
    }
  `],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav mode="side" opened class="sidenav">
        <mat-nav-list>
          <ng-container *ngFor="let item of config.items">
            <!-- Single level item -->
            <a mat-list-item 
               *ngIf="!item.children"
               [routerLink]="item.route"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: item.route === '/'}">
              <mat-icon matListItemIcon>{{item.icon || 'chevron_right'}}</mat-icon>
              <span matListItemTitle>{{item.label}}</span>
            </a>

            <!-- Parent item with children -->
            <div *ngIf="item.children" class="nav-item" [class.active]="expandedSection === item.label">
              <a mat-list-item (click)="toggle(item.label)">
                <mat-icon matListItemIcon>{{item.icon || 'chevron_right'}}</mat-icon>
                <span matListItemTitle>{{item.label}}</span>
              </a>
              <mat-icon class="caret-icon" [ngClass]="{'expanded': expandedSection === item.label}">
                chevron_right
              </mat-icon>
            </div>

            <!-- Children -->
            <div *ngIf="item.children && expandedSection === item.label" 
                 @expandCollapse 
                 class="sub-level nav-children">
              <a mat-list-item 
                 *ngFor="let child of item.children"
                 [routerLink]="child.route"
                 routerLinkActive="active"
                 class="nav-child-item">
                <span matListItemTitle>{{child.label}}</span>
              </a>
            </div>
          </ng-container>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class BricsLeftNavComponent {
  @Input() config: NavConfig = navigationConfig;
  expandedSection: string | null = null;

  toggle(section: string): void {
    this.expandedSection = this.expandedSection === section ? null : section;
  }
}