import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
import { PostcardComponent } from '../postcard/postcard.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterLink,
    CommonModule,
    PostcardComponent,
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostService) {}
  posts: any = [];

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe({
      next: (posts: any) => {
        console.log('Posts fetched');
        this.posts = posts;
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  loadByTagHandler(tag: string) {
    console.log('Tag clicked:', tag);
    this.postService.getPostsByTag(tag).subscribe({
      next: (posts: any) => {
        console.log('posts by tag', posts);
        this.posts = posts;
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
