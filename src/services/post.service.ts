import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment.development';

const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);

  constructor() {}
  getPosts() {
    return this.http.get(`${BASE_URL}posts?limit=10`);
  }
  getPostsHome() {
    return this.http.get(`${BASE_URL}posts?limit=4`);
  }

  getPostsByTag(tag: string) {
    return this.http.get(`${BASE_URL}posts/?tag=${tag}`);
  }

  getPostById(id: string) {
    return this.http.get(`${BASE_URL}posts/${id}`);
  }
}
