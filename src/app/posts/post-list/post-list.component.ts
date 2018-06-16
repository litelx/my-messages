import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postSub: Subscription;
  // posts = [
    // { title: 'First Post', content: 'Content of first post' },
    // { title: 'Second Post', content: 'Content of second post' },
    // { title: 'Third Post', content: 'Content of third post' }
  // ];

  constructor(public postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts();
    this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
