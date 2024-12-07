import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BricsExpansionPanelComponent } from '../../components/common/brics-expansion-panel.component';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [CommonModule, BricsExpansionPanelComponent],
  template: `
    <div class="welcome-container">
      <h1>Welcome to the BRICS Demo</h1>
      <app-brics-expansion-panel [panels]="expansionPanels">
      </app-brics-expansion-panel>
    </div>
  `,
  styles: [`
    .welcome-container {
      padding: 20px;
      background-color: white;
      margin: 20px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    h1 {
      color: #0078d4;
      font-size: 2em;
      margin-bottom: 20px;
    }
  `]
})
export class WelcomePageComponent {
  expansionPanels = [
    {
      title: 'Panel 1',
      content: 'Test content for Panel 1',
      isExpanded: true,
      showCaret: true
    },
    {
      title: 'Panel 2',
      content: 'Test content for Panel 2',
      isExpanded: false,
      showCaret: true
    },
    {
      title: 'Panel 3',
      content: 'Test content for Panel 3',
      isExpanded: false,
      showCaret: true
    }
  ];
}