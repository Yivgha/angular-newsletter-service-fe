import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
import { MatChipsModule } from '@angular/material/chips';
import { PostcardComponent } from '../postcard/postcard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { TagsSelectComponent } from '../tags-select/tags-select.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterLink,
    CommonModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    PostcardComponent,
    SearchBarComponent,
    TagsSelectComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private postService: PostService) {}

  posts: any[] = [];
  uniqueTags: string[] = [];

  ngOnInit(): void {
    this.loadPosts();
    this.loadMaxTags();
  }

  loadPosts() {
    this.postService.getPostsHome().subscribe({
      next: (posts: any) => {
        this.posts = posts;
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  loadMaxTags() {
    this.postService.getPosts().subscribe({
      next: (posts: any) => {
        this.uniqueTags = this.extractUniqueTags(posts);
        console.log(this.uniqueTags);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  extractUniqueTags(posts: any[]): string[] {
    const uniqueTagsSet = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag: string) => {
        uniqueTagsSet.add(tag);
      });
    });
    return Array.from(uniqueTagsSet);
  }

  loadByTagHandler(tag: string) {
    console.log('Tag clicked:', tag);
    this.postService.getPostsByTag(tag).subscribe({
      next: (posts: any) => {
        this.posts = posts;
        console.log('posts by tag click', posts);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
