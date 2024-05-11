import { Component, OnInit, inject } from '@angular/core';
import { GoBackComponent } from '../go-back/go-back.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [GoBackComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {}
