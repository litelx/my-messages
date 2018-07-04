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
  isLoading = false;
  private postSub: Subscription;
  // posts = [
  // { title: 'First Post', content: 'Content of first post' },
  // { title: 'Second Post', content: 'Content of second post' },
  // { title: 'Third Post', content: 'Content of third post' }
  // ];

  constructor(public postService: PostService) {}

  ngOnInit() {
    /*
    const token = '""" is klmist lkcispc lm "is kfjdf"';
    const s = 'is';

    const arr = token.split('"');
    let count = 0;
    for (let i = 0; i < arr.length; i = i + 2) {
      count += arr[i].split(s).length - 1;
    }
    console.log(count);
  */
    // let passed = 3;
    // function addTo() {
    //   let inner = 2;
    //   return inner + passed;
    // }
    // let passed = 4;
    // console.dir(addTo);
    // console.log(addTo);
    this.isLoading = true;
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

  onDelete(id: string) {
    console.log('Deleting message', id);
    this.isLoading = true;
    this.postService.deletePost(id);
    this.isLoading = false;
  }
}
