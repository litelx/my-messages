import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: any}>('http://localhost:3000/api/posts')
    .pipe(map((postData) => {
      return postData.posts.map(post => {
        return {
          id: post._id,
          title: post.title,
          content: post.content
        };
      });
    }))
    .subscribe((transformedData) => {
      this.posts = transformedData;
      this.postUpdated.next([...this.posts]);
    });
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {
      id: null,
      title: title,
      content: content
    };
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts', post)
    .subscribe((responseData) => {
      // console.log(responseData.message);
      post.id = responseData.postId;
      this.posts.push(post);
      this.postUpdated.next([...this.posts]);
    });
  }

  deletePost(id: string) {
    this.http.delete('http://localhost:3000/api/posts/' + id)
    .subscribe( () => {
      // console.log('Deleted');
      this.posts = this.posts.filter(post => post.id !== id);
      this.postUpdated.next([...this.posts]);
    });

  }
}
