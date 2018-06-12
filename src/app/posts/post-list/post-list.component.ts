import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts: Post[] = [];
  // posts = [
  //   { title: 'First Post', content: 'Content of first post' },
  //   { title: 'Second Post', content: 'Content of second post' },
  //   { title: 'Third Post', content: 'Content of third post' }
  // ];

  constructor(public postService: PostService) {}
}
