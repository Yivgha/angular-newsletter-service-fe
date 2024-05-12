import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PostService } from '../../services/post.service';
import {
  MatFormFieldModule,
  FloatLabelType,
} from '@angular/material/form-field';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Input() posts: any[] = [];
  @Output() searchEvent = new EventEmitter<string>();
  @Output() loadPosts = new EventEmitter<void>();

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);

  constructor(
    private _formBuilder: FormBuilder,
    private postService: PostService
  ) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  searchPosts(tag: string) {
    if (tag.trim() === '') {
      this.loadPosts.emit();
      return;
    }

    this.postService.getPostsByTag(tag).subscribe({
      next: (posts: any) => {
        this.posts = posts;
        this.searchEvent.emit(tag);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
