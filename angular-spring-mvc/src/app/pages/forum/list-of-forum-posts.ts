import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TEST_POSTS } from '../../test-models/forum/posts';
import { Post } from '../../models/forum/post';
import { BricsForumTopicSelectorComponent } from '../../components/forum/brics-forum-topic-selector.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-of-forum-posts',
  standalone: true,
  imports: [
    CommonModule, 
    MatListModule, 
    MatIconModule, 
    MatDividerModule,
    BricsForumTopicSelectorComponent,
    FormsModule
  ],
  template: `
    <div class="filter-container">
      <app-brics-forum-topic-selector (ngModelChange)="filterByTopic($event)" [(ngModel)]="selectedTopicId">
      </app-brics-forum-topic-selector>
    </div>

    <mat-list>
      <div mat-subheader>Forum Posts</div>
      
      <mat-list-item *ngFor="let post of filteredPosts">
        <div class="post-wrapper">
          <div class="post-container">
            <div class="post-title">
              <a href="#">{{ post.title }}</a>
            </div>
            <div class="post-topic">{{ getTopicName(post.topicId) }}</div>
            <div class="post-creator">{{ post.creator?.username }}</div>
            <div class="post-date">Posted on {{ post.dateCreated | date:'yyyy-MM-dd' }}</div>
            <div class="post-replies">{{ post.numberOfReplies }} replies</div>
            <div class="post-last-reply">Last reply on {{ post.lastReplyDate | date:'yyyy-MM-dd' }}</div>
          </div>
          <div class="post-content">
            {{ post.content }}
          </div>
        </div>
        <mat-divider></mat-divider>
      </mat-list-item>
    </mat-list>
  `,
  styles: [`
    .post-wrapper {
      width: 100%;
      padding: 16px 0;
    }
    .post-container {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr 1.5fr 1fr 1.5fr;
      gap: 16px;
      width: 100%;
      padding: 8px 0;
    }
    .post-content {
      padding: 16px 0;
      color: #666;
      grid-column: 1 / -1;
    }
    .post-title a {
      color: #2e7d32;
      text-decoration: none;
      font-weight: bold;
    }
    .post-title a:hover {
      text-decoration: underline;
    }
    .post-topic {
      color: #666;
    }
    mat-list-item {
      margin-bottom: 16px;
      height: auto !important;
      min-height: 120px !important;
    }
    .filter-container {
      padding: 16px;
      display: flex;
      align-items: flex-start;
    }
  `]
})
export class ListOfForumPostsComponent {
  posts: Post[] = TEST_POSTS;
  selectedTopicId: number = -1;
  filteredPosts: Post[] = this.posts;
  topics = [
    { id: -1, name: '- Select One -' },
    { id: 1, name: 'GENERAL DISCUSSION' },
    { id: 2, name: 'Query Tool' },
    { id: 3, name: 'Data Repository' },
    { id: 4, name: 'Data Repository: Imaging Submission' },
    { id: 5, name: 'Data Repository: Genomics Submission' },
    { id: 6, name: 'Data Repository: Clinical Assessments Submission' },
    { id: 7, name: 'Data Dictionary' },
    { id: 8, name: 'Data Dictionary: Imaging' },
    { id: 9, name: 'Data Dictionary: Genomics' },
    { id: 10, name: 'Data Dictionary: Clinical Assessments' },
    { id: 11, name: 'Cross Mapping' },
    { id: 12, name: 'Subject Management' },
    { id: 13, name: 'Meta Study' },
    { id: 14, name: 'ProFoRMS' }
  ];

  filterByTopic(topicId: number) {
    this.filteredPosts = topicId === -1 
      ? this.posts 
      : this.posts.filter(post => post.topicId === topicId);
  }

  getTopicName(topicId: number): string {
    const topic = this.topics.find(t => t.id === topicId);
    return topic?.name || 'GENERAL DISCUSSION';
  }
}