import { Component, Input, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-brics-expansion-panel',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  template: `
    <mat-accordion [multi]="false" class="brics-expansion-panel">
      <mat-expansion-panel 
        *ngFor="let panel of panels; let i = index" 
        [expanded]="panel.isExpanded"
        (opened)="onPanelOpened(i)">
        <mat-expansion-panel-header>
          <mat-panel-title>
            {{ panel.title }}
          </mat-panel-title>
          <mat-panel-description>
            <mat-icon class="caret-icon" [class.expanded]="panel.isExpanded">
              chevron_right
            </mat-icon>
          </mat-panel-description>
        </mat-expansion-panel-header>
        {{ panel.content }}
      </mat-expansion-panel>
    </mat-accordion>
  `,
  styles: [`
    .brics-expansion-panel {
      .mat-expansion-panel {
        margin-bottom: 8px;
        border-radius: 4px;
        background-color: #ffffff;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);

        &:not(.mat-expanded) {
          &:hover {
            background-color: #f8f9fa;
          }
        }
      }

      .mat-expansion-panel-header {
        padding: 0 16px;
        height: 48px;
      }

      .mat-expansion-panel-header-title {
        color: #333;
        font-weight: 500;
      }

      .mat-expansion-panel-header-description {
        justify-content: flex-end;
        margin-right: 0;
      }

      .caret-icon {
        transition: transform 200ms ease-in-out;
        color: #666;
      }

      .caret-icon.expanded {
        transform: rotate(90deg);
      }
    }
  `]
})
export class BricsExpansionPanelComponent {
  @Input() panels: Array<{
    title: string;
    content: string;
    isExpanded?: boolean;
  }> = [];

  ngOnInit() {
    // Set the first panel to expanded by default if none are expanded
    if (this.panels.length > 0 && !this.panels.some(panel => panel.isExpanded)) {
      this.panels[0].isExpanded = true;
    }
  }

  onPanelOpened(index: number) {
    this.panels.forEach((panel, i) => {
      panel.isExpanded = i === index;
    });
  }
}