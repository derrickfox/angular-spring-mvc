import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { TEST_POSTS } from '../../../test-models/forum/test-forum-posts';
import { BricsBackToListButtonComponent } from '../../../components/common/brics-back-to-list-button.component';

@Component({
  selector: 'app-view-forum-post',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    BricsBackToListButtonComponent
  ],
  template: `
    <app-brics-back-to-list-button [topicId]="post?.topicId"></app-brics-back-to-list-button>
    
    <mat-card class="post-card">
      <mat-card-header>
        <mat-card-title>{{ post?.title }}</mat-card-title>
        <mat-card-subtitle>
          Posted by {{ post?.creator?.username }} on {{ post?.dateCreated | date:'medium' }}
          in {{ getTopicName(post?.topicId) }}
        </mat-card-subtitle>
      </mat-card-header>
      
      <mat-card-content>
        <p class="post-content">{{ post?.content }}</p>
      </mat-card-content>

      <mat-divider></mat-divider>

      <mat-card-footer class="post-footer">
        <div>{{ post?.numberOfReplies }} replies</div>
        <div>Last reply: {{ post?.lastReplyDate | date:'medium' }}</div>
      </mat-card-footer>
    </mat-card>
  `,
  styles: [`
    :host {
      position: relative;
      display: block;
    }
    .post-card {
      max-width: 800px;
      margin: 20px auto;
    }
    .post-content {
      margin: 20px 0;
      white-space: pre-wrap;
    }
    .post-footer {
      padding: 16px;
      color: #666;
    }
  `]
})
export class ViewForumPostComponent {
  post?: Post;
  
  // Reusing the topics array from the list component
  topics = [
    { id: -1, name: '- Select One -' },
    { id: 1, name: 'General Discussion' },
    // ... rest of topics
  ];

  constructor(private route: ActivatedRoute) {
    // For now, we'll get the post from the test data
    // Later, this should come from a service
    const id = this.route.snapshot.paramMap.get('id');
    this.post = TEST_POSTS.find(p => p.id === Number(id));
  }

  getTopicName(topicId?: number): string {
    const topic = this.topics.find(t => t.id === topicId);
    return topic?.name || 'General Discussion';
  }
}