import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TEST_POSTS } from '../../../test-models/forum/posts';
import { Post } from '../../../modules/forum/models/post';
import { BricsForumTopicSelectorComponent } from '../components/brics-forum-topic-selector.component';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-of-forum-posts',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    BricsForumTopicSelectorComponent,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <div class="filter-container">
      <app-brics-forum-topic-selector (ngModelChange)="filterByTopic($event)" [(ngModel)]="selectedTopicId">
      </app-brics-forum-topic-selector>

      <button mat-raised-button 
              color="primary" 
              (click)="resetTopic()"
              class="reset-button">
        Reset Topic
      </button>

      <mat-form-field appearance="outline" class="search-field">
        <mat-icon matPrefix>search</mat-icon>
        <input matInput 
               placeholder="Search posts..." 
               [(ngModel)]="searchTerm"
               (ngModelChange)="filterPosts()">
      </mat-form-field>
    </div>

    <mat-list>
      <div mat-subheader>Forum Posts</div>
      
      <mat-list-item *ngFor="let post of filteredPosts" (click)="viewPost(post)">
        <div class="post-wrapper">
          <div class="post-container">
            <div class="post-title">
              <a (click)="$event.preventDefault()">{{ post.title }}</a>
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
      white-space: normal;
      word-wrap: break-word;
      overflow-wrap: break-word;
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
      gap: 16px;
    }
    
    .reset-button {
      height: 56px;
    }
    
    .search-field {
      flex: 1;
      max-width: 400px;
    }
    
    mat-icon {
      color: #666;
      margin-right: 8px;
    }
  `]
})
export class ListOfForumPostsComponent implements OnInit {
  posts: Post[] = TEST_POSTS;
  selectedTopicId: number = -1;
  filteredPosts: Post[] = this.posts;
  topics = [
    { id: -1, name: '- Select One -' },
    { id: 1, name: 'General Discussion' },
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
  searchTerm: string = '';
  private allPosts: Post[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.allPosts = this.posts;
    this.route.queryParams.subscribe(params => {
      if (params['topic']) {
        this.selectedTopicId = +params['topic'];
        this.filterByTopic(this.selectedTopicId);
      }
    });
  }

  filterPosts() {
    let filtered = this.selectedTopicId === -1 
      ? this.allPosts 
      : this.allPosts.filter(post => post.topicId === this.selectedTopicId);
    
    if (this.searchTerm.trim()) {
      const search = this.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(search) ||
        post.content.toLowerCase().includes(search) ||
        post.creator?.username.toLowerCase().includes(search) ||
        this.getTopicName(post.topicId).toLowerCase().includes(search)
      );
    }
    
    this.filteredPosts = filtered;
  }

  filterByTopic(topicId: number) {
    this.selectedTopicId = topicId;
    if (topicId !== -1) {
      sessionStorage.setItem('userSelectedTopic', 'true');
      sessionStorage.setItem('lastSelectedTopic', topicId.toString());
    } else {
      sessionStorage.removeItem('userSelectedTopic');
      sessionStorage.removeItem('lastSelectedTopic');
    }
    this.filterPosts();
  }

  getTopicName(topicId: number): string {
    const topic = this.topics.find(t => t.id === topicId);
    return topic?.name || 'General Discussion';
  }

  viewPost(post: Post) {
    if (this.selectedTopicId && this.selectedTopicId !== -1) {
      sessionStorage.setItem('userSelectedTopic', 'true');
      sessionStorage.setItem('lastSelectedTopic', this.selectedTopicId.toString());
    }
    this.router.navigate(['/forum/post', post.id]);
  }

  resetTopic() {
    this.selectedTopicId = -1;
    sessionStorage.removeItem('userSelectedTopic');
    sessionStorage.removeItem('lastSelectedTopic');
    this.filterPosts();
  }
}