import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloService } from '../services/hello.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-async-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="async-demo">
      <h2>Async Demo Component</h2>
      <div *ngIf="loading">Loading...</div>
      <div *ngIf="!loading && message">
        <p>Message from backend: {{ message }}</p>
      </div>
      <div *ngIf="!loading && error">
        <p class="error">Error: {{ error }}</p>
      </div>
    </div>
  `,
  styles: [`
    .async-demo {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 20px;
    }
    .error {
      color: red;
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
