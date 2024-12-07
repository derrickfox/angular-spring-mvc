import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TEST_POSTS } from '../../test-models/forum/posts';
import { Post } from '../../models/forum/post';

@Component({
  selector: 'app-list-of-forum-posts',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatDividerModule],
  template: `
    <mat-list>
      <div mat-subheader>Forum Posts</div>
      
      <mat-list-item *ngFor="let post of posts">
        <div matListItemTitle>{{ post.title }}</div>
        <div matListItemLine>
          Posted by {{ post.creator?.username || 'Unknown' }} on {{ post.dateCreated | date }}
        </div>
        <div matListItemLine>
          Replies: {{ post.numberOfReplies }}
        </div>
        <mat-divider></mat-divider>
      </mat-list-item>
    </mat-list>
  `,
  styles: [`
    mat-list-item {
      margin-bottom: 8px;
    }
    [matListItemTitle] {
      font-weight: bold;
    }
  `]
})
export class ListOfForumPostsComponent {
  posts: Post[] = TEST_POSTS;
}