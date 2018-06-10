import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styles: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts = [];
  // posts = [
  //   { title: 'First Post', content: 'Content of first post' },
  //   { title: 'Second Post', content: 'Content of second post' },
  //   { title: 'Third Post', content: 'Content of third post' }
  // ];
}
