import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Post } from '../../interfaces/post';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-postcard',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink,
    CommonModule,
    MatChipsModule,
    PostcardComponent,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  templateUrl: './postcard.component.html',
  styleUrl: './postcard.component.css',
})
export class PostcardComponent {
  constructor(private postService: PostService) {}

  @Input() post!: Post;
  @Input() loadByTagHandler!: (tag: string) => void;
  isExpanded = false;

  handleClick(tag: string) {
    this.loadByTagHandler(tag);
  }
}
