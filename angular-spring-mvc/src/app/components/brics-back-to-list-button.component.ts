import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brics-back-to-list-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <button mat-raised-button color="primary" (click)="navigateBack()">
      <mat-icon>arrow_back</mat-icon>
      Back to List
    </button>
  `,
  styles: [`
    button {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  `]
})
export class BricsBackToListButtonComponent {
  @Input() topicId?: number;

  constructor(private router: Router) {}

  navigateBack() {
    // Navigate to list with query params for topic selection
    this.router.navigate(['/forum'], {
      queryParams: { topic: this.topicId }
    });
  }
}