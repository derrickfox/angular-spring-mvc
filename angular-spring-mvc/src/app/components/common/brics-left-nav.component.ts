import { Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NavConfig, NavItem } from '../../models/forum/forum-nav-config';
import { navigationConfig } from '../../test-configs/forum/navigation.config';

@Component({
  selector: 'app-brics-left-nav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, MatIconModule, CommonModule, RouterModule],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav mode="side" opened class="sidenav">
        <mat-nav-list>
          <ng-container *ngFor="let item of config.items">
            <ng-container *ngTemplateOutlet="navItemTemplate; context: { $implicit: item, level: 0 }">
            </ng-container>
          </ng-container>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <ng-template #navItemTemplate let-item let-level="level">
      <!-- Single item without children -->
      <a mat-list-item *ngIf="!item.children"
         [routerLink]="item.route"
         routerLinkActive="active"
         [style.padding-left.px]="level * 16"
         [routerLinkActiveOptions]="{exact: item.route === '/'}">
        <mat-icon matListItemIcon>{{item.icon || 'chevron_right'}}</mat-icon>
        <span matListItemTitle>{{item.label}}</span>
      </a>

      <!-- Parent item with children (levels 0-2 only) -->
      <div *ngIf="item.children && level < 3" 
           class="nav-item"
           [class.active]="isExpanded(item.label)"
           [style.padding-left.px]="level * 16">
        <a mat-list-item (click)="toggle(item.label)">
          <mat-icon matListItemIcon>{{item.icon || 'chevron_right'}}</mat-icon>
          <span matListItemTitle>{{item.label}}</span>
          <mat-icon class="caret-icon" [class.expanded]="isExpanded(item.label)">
            chevron_right
          </mat-icon>
        </a>
      </div>

      <!-- Children -->
      <div *ngIf="item.children && isExpanded(item.label)"
           [@expandCollapse]
           class="nav-children">
        <ng-container *ngFor="let child of item.children">
          <ng-container *ngTemplateOutlet="navItemTemplate; context: { $implicit: child, level: level + 1 }">
          </ng-container>
        </ng-container>
      </div>
    </ng-template>
  `,
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
    
    .nav-children {
      overflow: hidden;
    }

    .mat-list-item {
      height: 48px;
    }
  `],
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
  ]
})
export class BricsLeftNavComponent {
  @Input() config: NavConfig = navigationConfig;
  expandedSections: Set<string> = new Set();

  isExpanded(section: string): boolean {
    return this.expandedSections.has(section);
  }

  toggle(section: string): void {
    if (this.expandedSections.has(section)) {
      this.expandedSections.delete(section);
    } else {
      this.expandedSections.add(section);
    }
  }
}