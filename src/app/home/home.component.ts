import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  http = inject(HttpClient);
  posts: any = [];

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http
      .get('https://fastapi-python-be-6c5comhxpq-oe.a.run.app/posts?_limit=10')
      .subscribe((posts: any) => {
        this.posts = posts;
      });
  }
}
