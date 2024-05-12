import { Component, OnInit } from '@angular/core';
import { GoBackComponent } from '../go-back/go-back.component';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [GoBackComponent, MatChipsModule, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  post!: Post;
  loadingSpinner = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');

    if (postId) {
      this.loadingSpinner = true;
      this.postService
        .getPostById(postId)
        .pipe(
          catchError((error: any): Observable<any> => {
            console.error(error);
            this.loadingSpinner = false;
            return throwError(error);
          })
        )
        .subscribe((post: Post) => {
          this.post = post;
          console.log(post);
          this.loadingSpinner = false;
        });
    }
  }
}
