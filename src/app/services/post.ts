import { Injectable, signal } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
private posts = signal<Post[]>([]);

getPosts()
{
  return this.posts.asReadonly();
}
addPost(post: Post) {
  const current = this.posts(); 
  this.posts.set([...current, post]); 
}

clearPosts() {
  this.posts.set([]);
}

}
