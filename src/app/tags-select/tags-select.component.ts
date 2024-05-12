import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  MatFormFieldModule,
  FloatLabelType,
} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-tags-select',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './tags-select.component.html',
  styleUrl: './tags-select.component.css',
})
export class TagsSelectComponent {
  @Input() posts: any[] = [];
  @Input() uniqueTags: any[] = [];
  @Output() searchTagEvent = new EventEmitter<string>();
  @Output() loadPosts = new EventEmitter<void>();
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);

  constructor(
    private postService: PostService,
    private _formBuilder: FormBuilder
  ) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  refetchAllPosts() {
    this.loadPosts.emit();
    return;
  }

  searchPostsByTag(tag: string) {
    if (tag.trim() === '') {
      this.loadPosts.emit();
      return;
    }
    console.log('tag by select', tag);

    this.postService.getPostsByTag(tag).subscribe({
      next: (posts: any) => {
        this.posts = posts;
        console.log('posts by select', posts);
        this.searchTagEvent.emit(tag);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
