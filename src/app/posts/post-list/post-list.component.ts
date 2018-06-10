import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styles: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { title: 'First Pst', content: 'Content of first post' },
    { title: 'Fecond Pst', content: 'Content of second post' },
    { title: 'Third title', content: 'Content of third post' }
  ];
}
