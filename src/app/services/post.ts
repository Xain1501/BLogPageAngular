// src/app/services/post.service.ts

import { Injectable, signal } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = signal<Post[]>([]); 
  
  getPosts() {
    return this.posts.asReadonly();
  }

  addPost(post: Post) {
    const newPost: Post = {
      ...post,
      likes: 0,
      comments: []
    };
    const current = this.posts();
    this.posts.set([...current, newPost]);
  }

  likePost(postId: number) {
    const updatedPosts = this.posts().map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    this.posts.set(updatedPosts);
  }

  addComment(postId: number, comment: string) {
    const updatedPosts = this.posts().map(post =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    );
    this.posts.set(updatedPosts);
  }

  clearPosts() {
    this.posts.set([]);
  }
}
