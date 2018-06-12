import { Post } from './post.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PostService {
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts];
  }

  addpost(title: string, content: string) {
    const post: Post = {
      title: title,
      content: content
    };
    this.posts.push(post);
  }

  deletePost() {

  }
}
