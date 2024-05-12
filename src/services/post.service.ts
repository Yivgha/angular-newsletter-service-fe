import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
// const JSON_PLACEHOLDER_URL =
//   'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10';

const BASE_URL =
  'https://fastapi-python-be-6c5comhxpq-oe.a.run.app/posts?limit=10';

const HOME_POSTS =
  'https://fastapi-python-be-6c5comhxpq-oe.a.run.app/posts?limit=4';

const TAG_POSTS =
  'https://fastapi-python-be-6c5comhxpq-oe.a.run.app/posts/?tag=';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);

  constructor() {}
  getPosts() {
    return this.http.get(BASE_URL);
  }
  getPostsHome() {
    return this.http.get(HOME_POSTS);
  }

  getPostsByTag(tag: string) {
    return this.http.get(`${TAG_POSTS}${tag}`);
  }
}
