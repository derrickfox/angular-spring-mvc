import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloService } from '../services/hello.service';
import { firstValueFrom } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-async-demo',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  template: `
    <mat-card class="async-demo">
      <mat-card-header>
        <mat-card-title>Async Demo Component</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <div *ngIf="loading" class="loading-spinner">
          <mat-spinner diameter="50"></mat-spinner>
        </div>
        <div *ngIf="!loading && message">
          <p>Message from backend: {{ message }}</p>
        </div>
        <div *ngIf="!loading && error">
          <p class="error">Error: {{ error }}</p>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .async-demo {
      max-width: 600px;
      margin: 20px;
      background-color: #ffffff;
    }
    .loading-spinner {
      display: flex;
      justify-content: center;
      padding: 20px;
    }
    .error {
      color: #d32f2f;
    }
    mat-card-title {
      color: #0078d4;
    }
  `]
})
export class AsyncDemoComponent implements OnInit {
  message: string = '';
  loading: boolean = true;
  error: string = '';

  constructor(private helloService: HelloService) {}

  async ngOnInit() {
    try {
      this.loading = true;
      this.message = await firstValueFrom(this.helloService.getMessage());
    } catch (err) {
      this.error = 'Failed to fetch message from server';
      console.error('Error:', err);
    } finally {
      this.loading = false;
    }
  }
}
